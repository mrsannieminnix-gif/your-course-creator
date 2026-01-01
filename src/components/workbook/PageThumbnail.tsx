import React from "react";
import { WorkbookPage } from "@/types/workbook";

interface PageThumbnailProps {
  page: WorkbookPage;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export const PageThumbnail: React.FC<PageThumbnailProps> = ({
  page,
  index,
  isActive,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
        isActive
          ? "bg-primary/10 border-2 border-primary shadow-soft"
          : "bg-card hover:bg-card/80 border border-border hover:border-primary/30"
      }`}
    >
      <div className="flex items-center gap-3">
        <span className={`text-sm font-medium w-6 h-6 rounded-full flex items-center justify-center ${
          isActive ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
        }`}>
          {index + 1}
        </span>
        <div className="flex-1 min-w-0">
          <p className={`text-sm font-medium truncate ${isActive ? "text-primary" : "text-foreground"}`}>
            {page.title}
          </p>
          {page.subtitle && (
            <p className="text-xs text-muted-foreground truncate">
              {page.subtitle}
            </p>
          )}
        </div>
      </div>
    </button>
  );
};
