import { useEffect, useRef } from 'react';
import { initParticleScene, initGeometryScene, initCodeParticles } from '@/lib/three-scene.js';

export function useParticleSystem(type = 'particles') {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let scene;
    if (type === 'particles') {
      scene = initParticleScene(containerRef.current);
    } else if (type === 'geometry') {
      scene = initGeometryScene(containerRef.current);
    } else if (type === 'code') {
      scene = initCodeParticles(containerRef.current);
    }

    return () => {
      if (scene && scene.cleanup) {
        scene.cleanup();
      }
    };
  }, [type]);

  return containerRef;
}