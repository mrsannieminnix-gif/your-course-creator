export interface WorkbookPage {
  id: string;
  type: 'foundation' | 'tool' | 'reflection' | 'weekly' | 'faith' | 'checklist';
  title: string;
  subtitle?: string;
  sections: PageSection[];
}

export interface PageSection {
  id: string;
  type: 'header' | 'subheader' | 'paragraph' | 'list' | 'scripture' | 'quote' | 'diagram' | 'checklist';
  content: string;
  items?: string[];
  editable?: boolean;
}

export interface WorkbookData {
  title: string;
  pages: WorkbookPage[];
}
