import React from "react";

export const inlineKeyframes = `
@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
@keyframes hero-glow-pulse {
  0%, 100% { opacity: 0.35; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.15); }
}
@keyframes float-slow {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(8deg); }
}
@keyframes float-medium {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-14px) rotate(-6deg); }
}
@keyframes float-fast {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(12deg); }
}
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes cta-gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
@keyframes particle-float {
  0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
  25% { transform: translateY(-12px) translateX(6px); opacity: 0.8; }
  50% { transform: translateY(-6px) translateX(-4px); opacity: 0.5; }
  75% { transform: translateY(-18px) translateX(3px); opacity: 0.7; }
}
@keyframes dash-flow {
  to { stroke-dashoffset: 0; }
}
`;

export function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Cube 1 – top left */}
      <div
        className="absolute top-[12%] left-[8%] w-12 h-12 border-2 border-primary/20 rounded-lg opacity-40"
        style={{ animation: "float-slow 7s ease-in-out infinite, spin-slow 20s linear infinite" }}
      />
      {/* Orb 1 – top right */}
      <div
        className="absolute top-[18%] right-[12%] w-6 h-6 rounded-full opacity-50"
        style={{
          background: "radial-gradient(circle, hsl(180 100% 45% / 0.6), transparent 70%)",
          animation: "float-medium 5s ease-in-out infinite",
          animationDelay: "1s",
        }}
      />
      {/* Cube 2 – mid right */}
      <div
        className="absolute top-[55%] right-[6%] w-8 h-8 border-2 border-secondary/20 rounded-md opacity-30"
        style={{ animation: "float-fast 4.5s ease-in-out infinite, spin-slow 15s linear infinite reverse" }}
      />
      {/* Orb 2 – bottom left */}
      <div
        className="absolute bottom-[15%] left-[15%] w-10 h-10 rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle, hsl(280 80% 60% / 0.5), transparent 70%)",
          animation: "float-slow 6s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />
      {/* Ring – center left */}
      <div
        className="absolute top-[40%] left-[3%] w-16 h-16 border border-primary/10 rounded-full opacity-25"
        style={{ animation: "float-medium 8s ease-in-out infinite" }}
      />
      {/* Cube 3 – bottom right */}
      <div
        className="absolute bottom-[22%] right-[18%] w-5 h-5 border border-primary/15 rounded-sm opacity-35"
        style={{ animation: "float-fast 5.5s ease-in-out infinite, spin-slow 12s linear infinite", animationDelay: "0.5s" }}
      />
      {/* Extra orb – mid */}
      <div
        className="absolute top-[30%] left-[40%] w-4 h-4 rounded-full opacity-25 hidden lg:block"
        style={{
          background: "radial-gradient(circle, hsl(180 100% 45% / 0.4), transparent 70%)",
          animation: "float-slow 9s ease-in-out infinite",
          animationDelay: "3s",
        }}
      />
    </div>
  );
}
