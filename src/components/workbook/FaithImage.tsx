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
    <div className="my-6 print:my-2">
      <div className="flex flex-col items-center">
        <div className="relative rounded-xl overflow-hidden border-2 border-primary/30 bg-gradient-to-b from-primary/5 to-primary/10 shadow-lg max-w-md mx-auto print:max-w-[200px] print:border print:shadow-none">
          <img 
            src={imageSrc} 
            alt={faithImage.caption} 
            className="w-full h-auto print:max-h-36"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none print:hidden" />
        </div>
        <p className="mt-4 text-center font-handwritten text-xl text-primary italic max-w-sm print:mt-1 print:text-sm print:max-w-[250px]">
          "{faithImage.caption}"
        </p>
      </div>
    </div>
  );
};
