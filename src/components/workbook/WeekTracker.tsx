import React, { useState } from "react";

const emojis = ["😟", "😕", "😐", "🙂", "😊"];

export const WeekTracker: React.FC = () => {
  const [dayStates, setDayStates] = useState<(number | null)[]>(Array(7).fill(null));

  const handleDayClick = (dayIndex: number) => {
    setDayStates(prev => {
      const newStates = [...prev];
      if (newStates[dayIndex] === null) {
        newStates[dayIndex] = 0;
      } else if (newStates[dayIndex]! < emojis.length - 1) {
        newStates[dayIndex] = newStates[dayIndex]! + 1;
      } else {
        newStates[dayIndex] = null;
      }
      return newStates;
    });
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-sm font-medium text-muted-foreground mr-2">7-DAY CHECK IN:</span>
      {Array(7).fill(0).map((_, index) => (
        <button
          key={index}
          onClick={() => handleDayClick(index)}
          className="w-10 h-10 rounded-full border-2 border-primary/30 flex items-center justify-center text-lg hover:border-primary/60 hover:bg-sage-muted/30 transition-all"
          title={`Day ${index + 1}`}
        >
          {dayStates[index] !== null ? (
            emojis[dayStates[index]!]
          ) : (
            <span className="text-xs font-medium text-muted-foreground">{index + 1}</span>
          )}
        </button>
      ))}
    </div>
  );
};
