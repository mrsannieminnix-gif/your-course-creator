import { useState } from "react";
import { WorkbookEditor } from "@/components/workbook/WorkbookEditor";
import { initialWorkbookData } from "@/data/workbookContent";
import { toddlerWorkbookData } from "@/data/toddlerWorkbookContent";
import { earlyChildhoodWorkbookData } from "@/data/earlyChildhoodWorkbookContent";
import { middleChildhoodWorkbookData } from "@/data/middleChildhoodWorkbookContent";
import { teenWorkbookData } from "@/data/teenWorkbookContent";
import { wallRemindersWorkbookData } from "@/data/wallRemindersWorkbookContent";
import { resetCornerWorkbookData } from "@/data/resetCornerWorkbookContent";
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";

type WorkbookType = "foundation" | "toddler" | "early" | "middle" | "teen" | "wall" | "reset" | null;

const Index = () => {
  const [selectedWorkbook, setSelectedWorkbook] = useState<WorkbookType>(null);

  const workbookMap = {
    foundation: initialWorkbookData,
    toddler: toddlerWorkbookData,
    early: earlyChildhoodWorkbookData,
    middle: middleChildhoodWorkbookData,
    teen: teenWorkbookData,
    wall: wallRemindersWorkbookData,
    reset: resetCornerWorkbookData,
  };

  if (selectedWorkbook) {
    const workbookData = workbookMap[selectedWorkbook];
    return (
      <div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSelectedWorkbook(null)}
          className="fixed top-4 right-4 z-50 no-print"
        >
          ← Back to Workbooks
        </Button>
        <WorkbookEditor initialData={workbookData} />
      </div>
    );
  }

  const workbooks = [
    { id: "foundation" as const, title: "Foundation Workbook", desc: "The core 6 tools of Model Parenting - anchoring, validation, connection, grow, empower, and correction." },
    { id: "toddler" as const, title: "Ages 2-4 Workbook", desc: "Brain development, nervous system regulation, and applying the tools to common toddler challenges." },
    { id: "early" as const, title: "Ages 5-7 Workbook", desc: "School readiness, lying, sibling conflict, emotional outbursts, and building responsibility." },
    { id: "middle" as const, title: "Ages 8-12 Workbook", desc: "Peer influence, academics, technology, puberty, and building character in pre-teens." },
    { id: "teen" as const, title: "Ages 13-18 Workbook", desc: "Communication, risky behavior, relationships, mental health, faith, and launching well." },
    { id: "wall" as const, title: "Wall Reminders", desc: "Visual mantras and quick-reference tools to print and post around your home." },
    { id: "reset" as const, title: "Reset Corner", desc: "Printable sheets to set up a Reset Corner: feelings, needs, zones, helpers, grounding, and healthy behaviors." },
  ];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">
          The Model Parenting Method
        </h1>
        
        <p className="text-muted-foreground text-lg">
          Choose a workbook to begin
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {workbooks.map((wb) => (
            <button
              key={wb.id}
              onClick={() => setSelectedWorkbook(wb.id)}
              className="page-paper p-6 text-left transition-transform cursor-pointer hover:scale-[1.02]"
            >
              <Book className="w-8 h-8 text-primary mb-3" />
              <h2 className="font-serif text-xl font-semibold text-primary mb-2">
                {wb.title}
              </h2>
              <p className="text-muted-foreground text-sm">
                {wb.desc}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
