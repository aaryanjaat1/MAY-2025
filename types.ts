
export type SlideType = 'title' | 'section' | 'question' | 'fact' | 'table' | 'content';
export type SlideLayout = 'default' | 'split-horizontal' | 'split-vertical';

export interface SlideData {
  id: number;
  type: SlideType;
  layout?: SlideLayout;
  title?: string;
  content: string | string[] | TableRow[];
  extra?: string;
  footer?: string;
  imageUrl?: string;
  imageSize?: number; // percentage for split layouts
  gap?: number; // gap between boxes in split layouts
  boxPadding?: number; // internal padding of content boxes
}

export interface TableRow {
  col1: string;
  col2: string;
  col3?: string;
}

export interface GlobalSettings {
  bgImage?: string;
  gap?: number;
  boxPadding?: number;
  brandText?: string;
}
