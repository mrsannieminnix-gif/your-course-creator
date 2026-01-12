export interface WorkbookPage {
  id: string;
  type?: 'outline' | 'reflection' | 'goals' | 'goals-faith' | 'visuals';
  pageType?: 'outline' | 'reflection' | 'goals' | 'goals-faith' | 'visuals';
  section: number;
  sectionTitle: string;
  title: string;
  subtitle?: string;
  sections: PageSection[];
}

export interface PageSection {
  id: string;
  type: 'header' | 'subheader' | 'paragraph' | 'list' | 'scripture' | 'quote' | 'diagram' | 'checklist' | 'weekly-tracker' | 'goal-phrases' | 'comparison-image';
  content?: string;
  items?: string[];
  editable?: boolean;
  images?: {
    before: string;
    after: string;
    beforeLabel?: string;
    afterLabel?: string;
  };
}

export interface WorkbookData {
  title: string;
  pages: WorkbookPage[];
}