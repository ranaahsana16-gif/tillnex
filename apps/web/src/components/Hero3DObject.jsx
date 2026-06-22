import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function Hero3DObject({ className }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    let width = rect.width || window.innerWidth;
    let height = rect.height || (window.innerWidth < 1024 ? 360 : 450);

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.z = 240;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Group to hold all objects (allows rotating the entire system via mouse drag)
    const systemGroup = new THREE.Group();
    scene.add(systemGroup);

    // 1. Outer wireframe shell (Icosahedron for sci-fi look)
    const outerGeom = new THREE.IcosahedronGeometry(60, 2);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x00ffff, // Cyan
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });
    const outerMesh = new THREE.Mesh(outerGeom, outerMat);
    systemGroup.add(outerMesh);

    // 2. Inner glowing core (Solid Octahedron)
    const innerGeom = new THREE.OctahedronGeometry(30, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xbd34fe, // Purple
      transparent: true,
      opacity: 0.8,
      flatShading: true,
    });
    const innerMesh = new THREE.Mesh(innerGeom, innerMat);
    systemGroup.add(innerMesh);

    // 3. Orbiting digital particles/rings
    const particleCount = 120;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = [];

    for (let i = 0; i < particleCount; i++) {
      // Random orbit path
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const radius = 70 + Math.random() * 20;

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      particleSpeeds.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02,
      });
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    // Glow dot texture for particles
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 16;
    pCanvas.height = 16;
    const pCtx = pCanvas.getContext('2d');
    const pGradient = pCtx.createRadialGradient(8, 8, 0, 8, 8, 8);
    pGradient.addColorStop(0, 'rgba(0, 243, 243, 1)');
    pGradient.addColorStop(0.3, 'rgba(0, 243, 243, 0.8)');
    pGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    pCtx.fillStyle = pGradient;
    pCtx.fillRect(0, 0, 16, 16);
    const particleTexture = new THREE.CanvasTexture(pCanvas);

    const particleMat = new THREE.PointsMaterial({
      size: 4,
      map: particleTexture,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    systemGroup.add(particles);

    // Lighting (just in case materials are updated later)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Mouse Drag Interaction Variables
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    const rotationVelocity = { x: 0.005, y: 0.005 };

    const handleMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y,
      };

      if (isDragging) {
        // Rotate group based on mouse drag delta
        systemGroup.rotation.y += deltaMove.x * 0.007;
        systemGroup.rotation.x += deltaMove.y * 0.007;

        // Update velocity for inertia momentum
        rotationVelocity.y = deltaMove.x * 0.0015;
        rotationVelocity.x = deltaMove.y * 0.0015;
      }

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    // Touch event handlers for mobile/tablet support
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        const deltaMove = {
          x: touch.clientX - previousMousePosition.x,
          y: touch.clientY - previousMousePosition.y,
        };

        if (isDragging) {
          systemGroup.rotation.y += deltaMove.x * 0.007;
          systemGroup.rotation.x += deltaMove.y * 0.007;

          rotationVelocity.y = deltaMove.x * 0.0015;
          rotationVelocity.x = deltaMove.y * 0.0015;
        }

        previousMousePosition = { x: touch.clientX, y: touch.clientY };
      }
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    // Attach listeners to container so they only trigger when interacting with the canvas
    const domElement = containerRef.current;
    domElement.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    domElement.addEventListener('touchstart', handleTouchStart, { passive: true });
    domElement.addEventListener('touchmove', handleTouchMove, { passive: true });
    domElement.addEventListener('touchend', handleTouchEnd);

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    let count = 0;
    let frameId;

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      count += 0.01;

      // Outer wireframe floating animation
      outerMesh.rotation.y += 0.004;
      outerMesh.rotation.x += 0.002;
      
      // Pulse scale
      const scaleFactor = 1 + Math.sin(count * 2) * 0.04;
      outerMesh.scale.setScalar(scaleFactor);

      // Inner core counter-rotation
      innerMesh.rotation.y -= 0.012;
      innerMesh.rotation.z += 0.006;
      innerMesh.scale.setScalar(1 + Math.cos(count * 3) * 0.06);

      // Decay velocity when not dragging (inertia spin!)
      if (!isDragging) {
        systemGroup.rotation.y += rotationVelocity.y;
        systemGroup.rotation.x += rotationVelocity.x;

        rotationVelocity.x *= 0.95;
        rotationVelocity.y *= 0.95;

        // Apply constant slow spin base
        systemGroup.rotation.y += 0.0015;
      }

      // Animate particles (drift orbit)
      const positions = particles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        // Slightly rotate each particle position around the Y-axis
        const x = positions[i * 3];
        const z = positions[i * 3 + 2];
        const angle = 0.003;
        
        positions[i * 3] = x * Math.cos(angle) - z * Math.sin(angle);
        positions[i * 3 + 2] = x * Math.sin(angle) + z * Math.cos(angle);
        
        // Add vertical drift
        positions[i * 3 + 1] += Math.sin(count + i) * 0.05;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(frameId);
      domElement.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      domElement.removeEventListener('touchstart', handleTouchStart);
      domElement.removeEventListener('touchmove', handleTouchMove);
      domElement.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);
      if (renderer && renderer.domElement && containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      outerGeom.dispose();
      outerMat.dispose();
      innerGeom.dispose();
      innerMat.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      particleTexture.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`relative w-full h-[320px] sm:h-[400px] lg:h-[450px] cursor-grab active:cursor-grabbing flex items-center justify-center select-none ${className}`}
    />
  );
}
export default Hero3DObject;
