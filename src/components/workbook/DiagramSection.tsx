import React from "react";

interface DiagramSectionProps {
  content: string;
}

export const DiagramSection: React.FC<DiagramSectionProps> = ({ content }) => {
  // Parse the diagram content - expected format: "Item1 → Item2 → Item3"
  const items = content.split("→").map(item => item.trim());
  
  // Create a circular/flower arrangement for values
  const centerItem = items.find(item => item.toLowerCase().includes("calm")) || items[0];
  const surroundingItems = items.filter(item => item !== centerItem);

  return (
    <div className="flex flex-col items-center justify-center py-8">
      {/* Flower/circular diagram */}
      <div className="relative w-64 h-64">
        {/* Center item */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-20 h-20 rounded-full bg-sage-muted border-2 border-primary/40 flex items-center justify-center shadow-soft">
            <span className="font-serif text-sm text-center font-medium text-foreground">
              {centerItem}
            </span>
          </div>
        </div>
        
        {/* Surrounding petals */}
        {surroundingItems.map((item, index) => {
          const angle = (index * (360 / surroundingItems.length) - 90) * (Math.PI / 180);
          const radius = 70;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <div
              key={index}
              className="absolute w-20 h-16 flex items-center justify-center"
              style={{
                left: `calc(50% + ${x}px - 2.5rem)`,
                top: `calc(50% + ${y}px - 2rem)`,
              }}
            >
              <div className="w-full h-full rounded-full bg-cream-dark/80 border border-primary/30 flex items-center justify-center shadow-soft hover:bg-sage-muted/50 transition-colors cursor-default">
                <span className="font-serif text-xs text-center font-medium text-foreground px-2">
                  {item}
                </span>
              </div>
            </div>
          );
        })}
        
        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 256 256">
          {surroundingItems.map((_, index) => {
            const angle = (index * (360 / surroundingItems.length) - 90) * (Math.PI / 180);
            const startRadius = 35;
            const endRadius = 55;
            const startX = 128 + Math.cos(angle) * startRadius;
            const startY = 128 + Math.sin(angle) * startRadius;
            const endX = 128 + Math.cos(angle) * endRadius;
            const endY = 128 + Math.sin(angle) * endRadius;
            
            return (
              <line
                key={index}
                x1={startX}
                y1={startY}
                x2={endX}
                y2={endY}
                stroke="hsl(145 28% 42% / 0.3)"
                strokeWidth="1.5"
                strokeDasharray="4 2"
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};
