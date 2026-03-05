export interface Question {
  id: string;
  text: string;
  options: string[];
}

export interface QuestionSet {
  category: string;
  keywords: string[];
  questions: Question[];
}

export interface WidgetConfig {
  domain: string;
  groqApiKey: string;
  primaryColor: string;
  greeting: string;
  language: string;
}

export interface Lead {
  id: string;
  domain: string;
  pageUrl: string;
  pageTitle: string;
  answers: { question: string; answer: string }[];
  name: string;
  phone: string;
  email: string;
  summary: string;
  timestamp: number;
}

export interface PageContext {
  url: string;
  title: string;
  description: string;
  headings: string[];
  keywords: string[];
  category: string;
}

export interface PopupState {
  step: number; // 0=trigger, 1-3=questions, 4=summary+form, 5=thank you
  answers: { question: string; answer: string }[];
  questions: Question[];
  loading: boolean;
  summary: string;
}
