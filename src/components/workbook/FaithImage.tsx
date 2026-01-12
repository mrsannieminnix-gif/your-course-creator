import React from "react";
import { faithImageMap } from "./ComparisonImage";

interface FaithImageProps {
  faithImage?: {
    src: string;
    caption: string;
  };
}

export const FaithImage: React.FC<FaithImageProps> = ({ faithImage }) => {
  if (!faithImage) return null;

  const imageSrc = faithImageMap[faithImage.src] || faithImage.src;

  return (
    <div className="my-6">
      <div className="flex flex-col items-center">
        <div className="relative rounded-xl overflow-hidden border-2 border-primary/30 bg-gradient-to-b from-primary/5 to-primary/10 shadow-lg max-w-md mx-auto">
          <img 
            src={imageSrc} 
            alt={faithImage.caption} 
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
        <p className="mt-4 text-center font-handwritten text-xl text-primary italic max-w-sm">
          "{faithImage.caption}"
        </p>
      </div>
    </div>
  );
};
