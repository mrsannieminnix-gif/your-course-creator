import React from "react";
import { WorkbookPage as WorkbookPageType, PageSection } from "@/types/workbook";
import { BotanicalDecoration } from "./BotanicalDecoration";
import { EditableText } from "./EditableText";
import { EditableList } from "./EditableList";
import { DiagramSection } from "./DiagramSection";
import { ChecklistSection } from "./ChecklistSection";
import { WeekTracker } from "./WeekTracker";
import logo from "@/assets/logo.jpg";

interface WorkbookPageProps {
  page: WorkbookPageType;
  onUpdatePage: (page: WorkbookPageType) => void;
}

export const WorkbookPage: React.FC<WorkbookPageProps> = ({ page, onUpdatePage }) => {
  const updateSection = (sectionId: string, updates: Partial<PageSection>) => {
    const newSections = page.sections.map(section =>
      section.id === sectionId ? { ...section, ...updates } : section
    );
    onUpdatePage({ ...page, sections: newSections });
  };

  const renderSection = (section: PageSection) => {
    switch (section.type) {
      case "header":
        return (
          <h3 className="font-serif text-xl font-semibold text-primary tracking-wide mt-6 mb-3">
            <EditableText
              value={section.content}
              onChange={(content) => updateSection(section.id, { content })}
            />
          </h3>
        );

      case "subheader":
        return (
          <h4 className="font-serif text-lg font-medium text-foreground/90 mb-3 italic">
            <EditableText
              value={section.content}
              onChange={(content) => updateSection(section.id, { content })}
            />
          </h4>
        );

      case "paragraph":
        return (
          <p className="text-foreground/85 leading-relaxed mb-4">
            <EditableText
              value={section.content}
              onChange={(content) => updateSection(section.id, { content })}
              multiline
            />
          </p>
        );

      case "list":
        return (
          <div className="mb-4">
            {section.content && (
              <p className="font-medium text-foreground/90 mb-2">
                <EditableText
                  value={section.content}
                  onChange={(content) => updateSection(section.id, { content })}
                />
              </p>
            )}
            <EditableList
              items={section.items || []}
              onChange={(items) => updateSection(section.id, { items })}
            />
          </div>
        );

      case "scripture":
        return (
          <div className="my-6 p-4 bg-sage-muted/30 rounded-lg border-l-4 border-primary/50">
            <EditableText
              value={section.content}
              onChange={(content) => updateSection(section.id, { content })}
              multiline
              className="italic text-foreground/85"
            />
          </div>
        );

      case "quote":
        return (
          <blockquote className="my-6 px-6 py-4 border-l-4 border-primary/40 bg-cream-dark/30 rounded-r-lg">
            <p className="font-handwritten text-xl text-foreground/90 italic">
              <EditableText
                value={section.content}
                onChange={(content) => updateSection(section.id, { content })}
                multiline
              />
            </p>
          </blockquote>
        );

      case "diagram":
        return <DiagramSection content={section.content} />;

      case "checklist":
        return (
          <div className="mb-4">
            {section.content && (
              <p className="font-medium text-foreground/90 mb-3">
                <EditableText
                  value={section.content}
                  onChange={(content) => updateSection(section.id, { content })}
                />
              </p>
            )}
            <ChecklistSection
              items={section.items || []}
              onChange={(items) => updateSection(section.id, { items })}
            />
          </div>
        );

      case "weekly-tracker":
        return (
          <div className="mt-6 pt-4 border-t border-border/50">
            <WeekTracker />
          </div>
        );

      case "goal-phrases":
        return (
          <div className="my-4 p-6 bg-primary/10 rounded-xl border-2 border-primary/30">
            <EditableList
              items={section.items || []}
              onChange={(items) => updateSection(section.id, { items })}
              bulletStyle="none"
              className="text-center"
              itemClassName="font-handwritten text-2xl text-primary font-semibold py-2 justify-center"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="page-paper w-full max-w-2xl mx-auto p-8 md:p-12 min-h-[700px] animate-fade-in">
      {/* Botanical decorations */}
      <BotanicalDecoration position="top-left" variant="leaves" />
      <BotanicalDecoration position="top-right" variant="leaves" />
      <BotanicalDecoration position="bottom-left" variant="branch" />
      <BotanicalDecoration position="bottom-right" variant="branch" />

      {/* Page content */}
      <div className="relative z-10">
        {/* Section label */}
        <div className="text-center mb-2">
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
            SECTION {page.section} • {page.sectionTitle}
          </span>
        </div>

        {/* Page header */}
        <div className="text-center mb-8">
          {page.title && (
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary tracking-wide">
              <EditableText
                value={page.title}
                onChange={(title) => onUpdatePage({ ...page, title })}
              />
            </h1>
          )}
          {page.subtitle && (
            <h2 className="font-serif text-xl md:text-2xl text-primary/80 font-medium italic mt-2">
              <EditableText
                value={page.subtitle}
                onChange={(subtitle) => onUpdatePage({ ...page, subtitle })}
              />
            </h2>
          )}
          <div className="mt-4 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>

        {/* Sections */}
        <div className="space-y-2">
          {page.sections.map((section) => (
            <div key={section.id}>{renderSection(section)}</div>
          ))}
        </div>
      </div>

      {/* Logo in bottom right corner */}
      <div className="absolute bottom-4 right-4 z-20">
        <img 
          src={logo} 
          alt="The Model Parenting Method" 
          className="w-20 h-auto opacity-80"
        />
      </div>
    </div>
  );
};