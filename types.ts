
export type SlideType = 'title' | 'section' | 'question' | 'fact' | 'table' | 'content';

export interface SlideData {
  id: number;
  type: SlideType;
  title?: string;
  content: string | string[] | TableRow[];
  extra?: string;
  footer?: string;
}

export interface TableRow {
  col1: string;
  col2: string;
  col3?: string;
}
