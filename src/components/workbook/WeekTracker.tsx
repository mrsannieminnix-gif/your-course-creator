import React, { useState } from "react";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const ratings = [1, 2, 3, 4, 5];

export const WeekTracker: React.FC = () => {
  const [dayRatings, setDayRatings] = useState<(number | null)[]>(Array(7).fill(null));

  const handleRatingClick = (dayIndex: number, rating: number) => {
    setDayRatings(prev => {
      const newRatings = [...prev];
      // Toggle off if clicking same rating, otherwise set new rating
      newRatings[dayIndex] = newRatings[dayIndex] === rating ? null : rating;
      return newRatings;
    });
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-muted-foreground">7-DAY CHECK-IN</span>
        <span className="text-xs text-muted-foreground">(1 = struggled, 5 = nailed it)</span>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, dayIndex) => (
          <div key={day} className="flex flex-col items-center gap-1">
            <span className="text-xs font-medium text-foreground/70">{day}</span>
            <div className="flex flex-col gap-1">
              {ratings.map((rating) => (
                <button
                  key={rating}
                  onClick={() => handleRatingClick(dayIndex, rating)}
                  className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-semibold transition-all
                    ${dayRatings[dayIndex] === rating 
                      ? 'bg-primary text-primary-foreground border-primary' 
                      : 'border-primary/30 text-muted-foreground hover:border-primary/60 hover:bg-sage-muted/30'
                    }`}
                  title={`Day ${dayIndex + 1}, Rating ${rating}`}
                >
                  {rating}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
