import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { EditableText } from "./EditableText";

interface EditableListProps {
  items: string[];
  onChange: (items: string[]) => void;
  bulletStyle?: "disc" | "circle" | "dash" | "number" | "none";
  className?: string;
  itemClassName?: string;
}

export const EditableList: React.FC<EditableListProps> = ({
  items,
  onChange,
  bulletStyle = "disc",
  className,
  itemClassName
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleItemChange = (index: number, newValue: string) => {
    const newItems = [...items];
    newItems[index] = newValue;
    onChange(newItems);
  };

  const handleAddItem = () => {
    onChange([...items, ""]);
  };

  const handleRemoveItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    onChange(newItems);
  };

  const getBullet = (index: number) => {
    switch (bulletStyle) {
      case "number":
        return `${index + 1}.`;
      case "dash":
        return "—";
      case "circle":
        return "○";
      default:
        return "•";
    }
  };

  return (
    <ul className={`space-y-2 ${className || ""}`}>
      {items.map((item, index) => (
        <li
          key={index}
          className={`flex items-start gap-2 group ${itemClassName || ""}`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {bulletStyle !== "none" && (
            <span className="text-primary/70 mt-0.5 font-medium min-w-[1rem]">
              {getBullet(index)}
            </span>
          )}
          <div className="flex-1">
            <EditableText
              value={item}
              onChange={(value) => handleItemChange(index, value)}
              placeholder="Enter item..."
            />
          </div>
          {hoveredIndex === index && items.length > 1 && (
            <button
              onClick={() => handleRemoveItem(index)}
              className="opacity-0 group-hover:opacity-100 text-destructive/60 hover:text-destructive transition-opacity p-1"
              title="Remove item"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </li>
      ))}
      <li>
        <button
          onClick={handleAddItem}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
        >
          <Plus className="w-4 h-4" />
          Add item
        </button>
      </li>
    </ul>
  );
};
