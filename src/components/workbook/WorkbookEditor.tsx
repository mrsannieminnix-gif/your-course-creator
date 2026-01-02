import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Menu, Printer, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WorkbookPage as WorkbookPageType, WorkbookData } from "@/types/workbook";
import { WorkbookPage } from "./WorkbookPage";
import { PageThumbnail } from "./PageThumbnail";
import { initialWorkbookData } from "@/data/workbookContent";

interface WorkbookEditorProps {
  initialData?: WorkbookData;
}

export const WorkbookEditor: React.FC<WorkbookEditorProps> = ({ initialData }) => {
  const [workbook, setWorkbook] = useState<WorkbookData>(initialData || initialWorkbookData);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const printRef = useRef<HTMLDivElement>(null);

  const currentPage = workbook.pages[currentPageIndex];

  const updatePage = (updatedPage: WorkbookPageType) => {
    const newPages = workbook.pages.map((page, index) =>
      index === currentPageIndex ? updatedPage : page
    );
    setWorkbook({ ...workbook, pages: newPages });
  };

  const updatePageByIndex = (index: number, updatedPage: WorkbookPageType) => {
    const newPages = workbook.pages.map((page, i) =>
      i === index ? updatedPage : page
    );
    setWorkbook({ ...workbook, pages: newPages });
  };

  const goToPrevPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPageIndex < workbook.pages.length - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Print-only view with all pages - always rendered but hidden on screen */}
      <div ref={printRef} className="print-container print-all-pages">
        <div className="print-pages-wrapper">
          {workbook.pages.map((page, index) => (
            <div key={page.id} className="print-page-wrapper">
              <WorkbookPage
                page={page}
                onUpdatePage={(p) => updatePageByIndex(index, p)}
              />
            </div>
          ))}
        </div>
      </div>
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={`fixed md:relative z-40 h-screen bg-card border-r border-border transition-all duration-300 no-print ${
          sidebarOpen ? "w-72" : "w-0 md:w-16"
        }`}
      >
        <div className={`h-full flex flex-col ${sidebarOpen ? "p-4" : "p-2"}`}>
          {/* Sidebar header */}
          <div className="flex items-center justify-between mb-6">
            {sidebarOpen && (
              <h2 className="font-serif text-lg font-semibold text-primary truncate">
                {workbook.title}
              </h2>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="shrink-0"
            >
              {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>

          {/* Page list */}
          {sidebarOpen && (
            <div className="flex-1 overflow-y-auto space-y-2">
              {workbook.pages.map((page, index) => (
                <PageThumbnail
                  key={page.id}
                  page={page}
                  index={index}
                  isActive={index === currentPageIndex}
                  onClick={() => setCurrentPageIndex(index)}
                />
              ))}
            </div>
          )}

          {/* Quick nav for collapsed sidebar */}
          {!sidebarOpen && (
            <div className="flex-1 overflow-y-auto space-y-1">
              {workbook.pages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPageIndex(index)}
                  className={`w-full h-8 rounded flex items-center justify-center text-sm font-medium transition-colors ${
                    index === currentPageIndex
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted text-muted-foreground"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}

          {/* Sidebar actions */}
          {sidebarOpen && (
            <div className="pt-4 border-t border-border space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start gap-2"
                onClick={handlePrint}
              >
                <Printer className="w-4 h-4" />
                Print Workbook
              </Button>
            </div>
          )}
        </div>
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 z-30 md:hidden no-print"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="sticky top-0 z-20 bg-background/95 backdrop-blur border-b border-border px-4 py-3 no-print">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {currentPageIndex + 1} of {workbook.pages.length}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevPage}
                disabled={currentPageIndex === 0}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={goToNextPage}
                disabled={currentPageIndex === workbook.pages.length - 1}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <div className="flex-1 p-4 md:p-8 overflow-y-auto">
          <WorkbookPage page={currentPage} onUpdatePage={updatePage} />
        </div>

        {/* Bottom navigation */}
        <footer className="sticky bottom-0 bg-background/95 backdrop-blur border-t border-border px-4 py-3 no-print">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={goToPrevPage}
              disabled={currentPageIndex === 0}
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>
            <div className="flex gap-1">
              {workbook.pages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentPageIndex ? "bg-primary" : "bg-muted hover:bg-primary/50"
                  }`}
                  title={`Go to page ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="ghost"
              onClick={goToNextPage}
              disabled={currentPageIndex === workbook.pages.length - 1}
              className="gap-2"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </footer>
      </main>
    </div>
    </>
  );
};
