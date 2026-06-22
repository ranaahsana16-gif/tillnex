import React from 'react';

const gradientStyle = {
  backgroundImage: 'linear-gradient(90deg, hsl(180,100%,45%), hsl(280,80%,60%), hsl(180,100%,45%), hsl(280,80%,60%))',
  backgroundSize: '300% 100%',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'transparent',
  animation: 'gradient-shift 4s ease-in-out infinite',
  display: 'inline-block',
};

const keyframes = `
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`;

export function AnimatedGradientText({ children, className = '', ...props }) {
  return (
    <>
      <style>{keyframes}</style>
      <span className={className} style={gradientStyle} {...props}>
        {children}
      </span>
    </>
  );
}

export default AnimatedGradientText;
