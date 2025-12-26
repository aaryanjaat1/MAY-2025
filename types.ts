
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
  label: string;
  text: string;
}

export interface SlideData {
  id: string;
  type: SlideType;
  layout?: SlideLayout;
  title?: string;
  subtitle?: string;
  content: string | string[] | TableRow[];
  options?: QuizOption[];
  correctOptionId?: string;
  isRevealed?: boolean;
  imageUrl?: string;
  imageSize?: number;
  imageWidth?: number;
  imageHeight?: number;
  boxPadding?: number;
  contentScale?: number;
  contentYOffset?: number;
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
  quizScale?: number; // Global override for quiz slides
  factScale?: number; // Global override for fact slides
  defaultContentScale?: number;
  defaultContentYOffset?: number;
  defaultBottomPadding?: number;
  navScale?: number;
}

export interface Project {
  id: string;
  name: string;
  settings?: GlobalSettings;
  created_at?: string;
}
