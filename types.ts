
export type SlideType = 'title' | 'section' | 'question' | 'fact' | 'table' | 'content';
export type SlideLayout = 'default' | 'split-horizontal' | 'split-vertical';
export type BackgroundType = 'image' | 'gradient';

export interface Highlight {
  id: string;
  target: 'title' | 'body';
  lineIndex: number; // Index in the content array if target is body
  startWord: number; // 1-based index
  endWord: number;   // 1-based index
  bgColor: string;   // The "strip" color
  textColor: string; // The text color
}

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
  bgBlur?: number; // override global background blur
  bgType?: BackgroundType;
  bgGradient?: string;
  highlights?: Highlight[];
}

export interface TableRow {
  col1: string;
  col2: string;
  col3?: string;
}

export interface GlobalSettings {
  bgImage?: string;
  bgType?: BackgroundType;
  bgGradient?: string;
  boxWidth?: number;  // Global width % for standard layout
  boxHeight?: number; // Global height % for standard layout
  boxPadding?: number;
  bgBlur?: number;    // Global background blur intensity
  brandText?: string;
  bodyFontScale?: number; // Global multiplier for readability
}
