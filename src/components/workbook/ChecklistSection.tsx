import React, { useState } from "react";
import { Check, Plus, X } from "lucide-react";
import { EditableText } from "./EditableText";

interface ChecklistSectionProps {
  items: string[];
  onChange: (items: string[]) => void;
}

export const ChecklistSection: React.FC<ChecklistSectionProps> = ({
  items,
  onChange
}) => {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleCheck = (index: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedItems(newChecked);
  };

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
    const newChecked = new Set(checkedItems);
    newChecked.delete(index);
    setCheckedItems(newChecked);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-3 group"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <button
            onClick={() => toggleCheck(index)}
            className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
              checkedItems.has(index)
                ? "bg-primary border-primary text-primary-foreground"
                : "border-primary/40 hover:border-primary/60"
            }`}
          >
            {checkedItems.has(index) && <Check className="w-3 h-3" />}
          </button>
          <div className={`flex-1 ${checkedItems.has(index) ? "line-through opacity-60" : ""}`}>
            <EditableText
              value={item}
              onChange={(value) => handleItemChange(index, value)}
              placeholder="Enter checklist item..."
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
        </div>
      ))}
      <button
        onClick={handleAddItem}
        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm ml-8"
      >
        <Plus className="w-4 h-4" />
        Add item
      </button>
    </div>
  );
};
