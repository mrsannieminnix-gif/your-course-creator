import React from "react";

interface BotanicalDecorationProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  variant?: "leaves" | "branch" | "corner";
}

export const BotanicalDecoration: React.FC<BotanicalDecorationProps> = ({
  position,
  variant = "leaves"
}) => {
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0 -scale-x-100",
    "bottom-left": "bottom-0 left-0 -scale-y-100",
    "bottom-right": "bottom-0 right-0 -scale-x-100 -scale-y-100"
  };

  return (
    <div className={`botanical-corner ${positionClasses[position]} w-24 h-24 md:w-32 md:h-32`}>
      <svg
        viewBox="0 0 120 120"
        className="w-full h-full text-primary/30"
        fill="currentColor"
      >
        {variant === "leaves" && (
          <>
            {/* Main leaf cluster */}
            <ellipse cx="25" cy="35" rx="18" ry="8" transform="rotate(-45 25 35)" opacity="0.6" />
            <ellipse cx="40" cy="25" rx="15" ry="6" transform="rotate(-30 40 25)" opacity="0.5" />
            <ellipse cx="20" cy="50" rx="14" ry="5" transform="rotate(-60 20 50)" opacity="0.4" />
            <ellipse cx="50" cy="40" rx="12" ry="5" transform="rotate(-20 50 40)" opacity="0.3" />
            <ellipse cx="35" cy="55" rx="10" ry="4" transform="rotate(-50 35 55)" opacity="0.35" />
            {/* Stems */}
            <path
              d="M0 0 Q 30 30 25 35 M0 10 Q 25 30 40 25 M5 0 Q 15 40 20 50"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
            />
          </>
        )}
        {variant === "branch" && (
          <>
            <path
              d="M0 60 Q 40 50 60 30 Q 80 10 100 0"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              opacity="0.5"
            />
            <ellipse cx="30" cy="50" rx="12" ry="5" transform="rotate(-30 30 50)" opacity="0.4" />
            <ellipse cx="55" cy="35" rx="10" ry="4" transform="rotate(-20 55 35)" opacity="0.35" />
            <ellipse cx="80" cy="18" rx="8" ry="3" transform="rotate(-15 80 18)" opacity="0.3" />
          </>
        )}
      </svg>
    </div>
  );
};
