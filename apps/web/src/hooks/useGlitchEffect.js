import { useState, useEffect } from 'react';

export function useGlitchEffect(interval = 3000) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200 + Math.random() * 300);
    }, interval + Math.random() * 2000);

    return () => clearInterval(glitchInterval);
  }, [interval]);

  return isGlitching;
}