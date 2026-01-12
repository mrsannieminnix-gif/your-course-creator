import { useState } from "react";
import { WorkbookEditor } from "@/components/workbook/WorkbookEditor";
import { initialWorkbookData } from "@/data/workbookContent";
import { toddlerWorkbookData } from "@/data/toddlerWorkbookContent";
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";

const Index = () => {
  const [selectedWorkbook, setSelectedWorkbook] = useState<"foundation" | "toddler" | null>(null);

  if (selectedWorkbook) {
    const workbookData = selectedWorkbook === "foundation" ? initialWorkbookData : toddlerWorkbookData;
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

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">
          The Model Parenting Method
        </h1>
        
        <p className="text-muted-foreground text-lg">
          Choose a workbook to begin
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <button
            onClick={() => setSelectedWorkbook("foundation")}
            className="page-paper p-8 text-left transition-transform cursor-pointer hover:scale-[1.02]"
          >
            <Book className="w-10 h-10 text-primary mb-4" />
            <h2 className="font-serif text-2xl font-semibold text-primary mb-2">
              Foundation Workbook
            </h2>
            <p className="text-muted-foreground">
              The core 6 tools of Model Parenting - anchoring, validation, connection, grow, empower, and correction.
            </p>
          </button>
          <button
            onClick={() => setSelectedWorkbook("toddler")}
            className="page-paper p-8 text-left transition-transform cursor-pointer hover:scale-[1.02]"
          >
            <Book className="w-10 h-10 text-primary mb-4" />
            <h2 className="font-serif text-2xl font-semibold text-primary mb-2">
              Ages 2-4 Workbook
            </h2>
            <p className="text-muted-foreground">
              Brain development, nervous system regulation, and applying the tools to common toddler challenges.
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
