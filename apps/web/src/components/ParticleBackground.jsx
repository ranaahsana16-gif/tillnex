import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { cn } from '@/lib/utils.js';

export function ParticleBackground({ className }) {
  const containerRef = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mql.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    // Dimensions
    let width = containerRef.current.clientWidth || window.innerWidth;
    let height = containerRef.current.clientHeight || window.innerHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(65, width / height, 1, 1000);
    camera.position.z = 280;
    camera.position.y = 120;
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create glowing particle texture dynamically
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    
    // Smooth radial gradient for glow effect
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
    gradient.addColorStop(0.5, 'rgba(0, 243, 243, 0.25)'); // Cyan glow
    gradient.addColorStop(0.8, 'rgba(189, 52, 254, 0.05)'); // Purple outer glow
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
    
    const particleTexture = new THREE.CanvasTexture(canvas);

    // Wave grid variables
    const SEPARATION = 18;
    const AMOUNTX = 60;
    const AMOUNTY = 60;
    const numParticles = AMOUNTX * AMOUNTY;

    const positions = new Float32Array(numParticles * 3);
    const colors = new Float32Array(numParticles * 3);

    const cyan = new THREE.Color('#00ffff');
    const purple = new THREE.Color('#bd34fe');

    let idx = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        // x position centered
        positions[idx] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
        // y position initially 0
        positions[idx + 1] = 0;
        // z position centered
        positions[idx + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

        // Color blend based on location (cyan on one side, purple on the other)
        const ratio = (ix / AMOUNTX) * 0.6 + (iy / AMOUNTY) * 0.4;
        const color = cyan.clone().lerp(purple, ratio);
        colors[idx] = color.r;
        colors[idx + 1] = color.g;
        colors[idx + 2] = color.b;

        idx += 3;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Material using the dynamic Canvas texture
    const material = new THREE.PointsMaterial({
      size: 5,
      map: particleTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    // Points
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Mouse and scroll variables for animation interaction
    const mouse = { x: 0, y: 0 };
    const targetMouse = { x: 0, y: 0 };
    let scrollY = window.scrollY;

    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation variables
    let count = 0;
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      count += 0.012;

      // Smooth mouse interpolation
      targetMouse.x += (mouse.x - targetMouse.x) * 0.05;
      targetMouse.y += (mouse.y - targetMouse.y) * 0.05;

      const positionArray = points.geometry.attributes.position.array;

      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
          const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

          // Double wave formula
          let y = (Math.sin(ix * 0.12 + count) * 14) + (Math.cos(iy * 0.12 + count) * 14);

          // Mouse projection coordinates
          const mx = targetMouse.x * 350;
          const mz = -targetMouse.y * 350;

          // Push particles on mouse proximity
          const dx = x - mx;
          const dz = z - mz;
          const distance = Math.sqrt(dx * dx + dz * dz);
          
          if (distance < 180) {
            const influence = (1 - distance / 180) * 40;
            y += Math.sin(distance * 0.06 - count * 4) * influence;
          }

          positionArray[i + 1] = y;
          i += 3;
        }
      }

      points.geometry.attributes.position.needsUpdate = true;

      // Parallax camera movement
      camera.position.x = Math.sin(count * 0.04) * 40 + targetMouse.x * 25;
      camera.position.y = 120 + scrollY * 0.08 - targetMouse.y * 25;
      camera.position.z = 280 + Math.cos(count * 0.04) * 30;
      camera.lookAt(0, -20, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (renderer && renderer.domElement && containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      particleTexture.dispose();
    };
  }, [prefersReducedMotion]);

  // If user prefers reduced motion, render a subtle static gradient instead
  if (prefersReducedMotion) {
    return (
      <div
        className={cn('absolute inset-0 pointer-events-none overflow-hidden select-none', className)}
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(0, 243, 243, 0.06) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(189, 52, 254, 0.04) 0%, transparent 60%)',
        }}
      />
    );
  }

  return (
    <div 
      ref={containerRef} 
      className={cn('absolute inset-0 pointer-events-none overflow-hidden select-none', className)}
    />
  );
}

