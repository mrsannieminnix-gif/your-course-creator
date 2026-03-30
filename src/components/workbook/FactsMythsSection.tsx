import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

interface FactsMythsItem {
  myth: string;
  fact: string;
}

interface FactsMythsSectionProps {
  items: FactsMythsItem[];
}

export const FactsMythsSection: React.FC<FactsMythsSectionProps> = ({ items }) => {
  return (
    <div className="space-y-4 print:space-y-3">
      {items.map((item, index) => (
        <div key={index} className="rounded-xl overflow-hidden border border-border/50 print:break-inside-avoid">
          {/* Myth */}
          <div className="flex items-start gap-3 p-3 print:p-2 bg-destructive/10">
            <XCircle className="w-5 h-5 print:w-4 print:h-4 text-destructive shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-destructive">Myth</span>
              <p className="text-sm print:text-[11px] text-foreground/85 leading-relaxed mt-0.5">{item.myth}</p>
            </div>
          </div>
          {/* Fact */}
          <div className="flex items-start gap-3 p-3 print:p-2 bg-primary/10">
            <CheckCircle className="w-5 h-5 print:w-4 print:h-4 text-primary shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Fact</span>
              <p className="text-sm print:text-[11px] text-foreground/85 leading-relaxed mt-0.5">{item.fact}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
