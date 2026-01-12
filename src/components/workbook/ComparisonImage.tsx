import React from "react";
import parentStressed from "@/assets/parent-stressed-child-upset.png";
import parentCalm from "@/assets/parent-calm-child-calm.png";

interface ComparisonImageProps {
  images?: {
    before: string;
    after: string;
    beforeLabel?: string;
    afterLabel?: string;
  };
}

const imageMap: Record<string, string> = {
  "parent-stressed": parentStressed,
  "parent-calm": parentCalm,
};

export const ComparisonImage: React.FC<ComparisonImageProps> = ({ images }) => {
  if (!images) return null;

  const beforeSrc = imageMap[images.before] || images.before;
  const afterSrc = imageMap[images.after] || images.after;

  return (
    <div className="my-6">
      <div className="grid grid-cols-2 gap-6">
        {/* Before - Stressed scenario */}
        <div className="flex flex-col items-center">
          <div className="relative rounded-lg overflow-hidden border-2 border-destructive/30 bg-destructive/5">
            <img 
              src={beforeSrc} 
              alt={images.beforeLabel || "Before"} 
              className="w-full h-auto"
            />
            <div className="absolute top-2 left-2 bg-destructive/80 text-destructive-foreground px-2 py-1 rounded text-xs font-semibold">
              ✗
            </div>
          </div>
          <p className="mt-2 text-sm font-medium text-destructive text-center">
            {images.beforeLabel || "When I react..."}
          </p>
        </div>

        {/* After - Calm scenario */}
        <div className="flex flex-col items-center">
          <div className="relative rounded-lg overflow-hidden border-2 border-primary/30 bg-primary/5">
            <img 
              src={afterSrc} 
              alt={images.afterLabel || "After"} 
              className="w-full h-auto"
            />
            <div className="absolute top-2 left-2 bg-primary/80 text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
              ✓
            </div>
          </div>
          <p className="mt-2 text-sm font-medium text-primary text-center">
            {images.afterLabel || "When I model..."}
          </p>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="font-handwritten text-xl text-foreground/80 italic">
          "They become what they see."
        </p>
      </div>
    </div>
  );
};
