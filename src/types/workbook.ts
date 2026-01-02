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
  type: 'header' | 'subheader' | 'paragraph' | 'list' | 'scripture' | 'quote' | 'diagram' | 'checklist' | 'weekly-tracker' | 'goal-phrases';
  content?: string;
  items?: string[];
  editable?: boolean;
}

export interface WorkbookData {
  title: string;
  pages: WorkbookPage[];
}