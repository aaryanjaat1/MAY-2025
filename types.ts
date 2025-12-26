
export type SlideType = 'title' | 'section' | 'quiz' | 'fact' | 'table' | 'content';
export type SlideLayout = 'default' | 'split-horizontal' | 'split-vertical' | 'cover-page';
export type BackgroundType = 'image' | 'gradient';

export interface Highlight {
  id: string;
  target: 'title' | 'body';
  lineIndex: number;
  startWord: number;
  endWord: number;
  bgColor: string;
  textColor: string;
}

export interface QuizOption {
  id: string;
  label: string; // A, B, C, D
  text: string;  // e.g. "Gujarat (गुजरात)"
}

export interface SlideData {
  id: string;
  type: SlideType;
  layout?: SlideLayout;
  title?: string;
  subtitle?: string; // For Hindi translation in header
  content: string | string[] | TableRow[];
  options?: QuizOption[];
  correctOptionId?: string;
  isRevealed?: boolean; // For showing the checkmark
  imageUrl?: string;
  imageSize?: number;
  imageWidth?: number;  // New: Custom width for image box
  imageHeight?: number; // New: Custom height for image box
  boxPadding?: number;
  contentScale?: number;   // New: Shrink/Grow content area
  contentYOffset?: number; // New: Move content up/down
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
  boxWidth?: number;
  boxHeight?: number;
  boxPadding?: number;
  bgBlur?: number;
  brandText?: string;
  bodyFontScale?: number;
  titleFontScale?: number;
  factFontScale?: number;
  defaultContentScale?: number;
  defaultContentYOffset?: number;
}

export interface Project {
  id: string;
  name: string;
  settings?: GlobalSettings;
  created_at?: string;
}
