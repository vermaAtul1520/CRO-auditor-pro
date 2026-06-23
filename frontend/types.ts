export interface AuditRequest {
  type: 'url' | 'paste';
  content: string; // URL or raw HTML/text
  goal?: string;
  audience?: string;
  industry?: string;
}

export interface CategoryScore {
  name: string;
  score: number;
  weight: number;
  insight: string;
}

export interface Finding {
  severity: 'critical' | 'high' | 'medium' | 'low';
  category: string;
  issue: string;
  recommendation: string;
  impact: 'high' | 'medium' | 'low';
  effort: 'high' | 'medium' | 'low';
}

export interface PrioritizedAction {
  rank: number;
  action: string;
  why: string;
}

export interface AuditResult {
  overallScore: number;
  grade: string;
  summary: string;
  categories: CategoryScore[];
  findings: Finding[];
  quickWins: string[];
  prioritizedActions: PrioritizedAction[];
}

export interface ExtractedSignals {
  title: string;
  metaDescription: string;
  h1Count: number;
  h1Text: string[];
  h2Count: number;
  wordCount: number;
  imageCount: number;
  imagesMissingAlt: number;
  formCount: number;
  inputCount: number;
  ctaTexts: string[];
  hasViewportMeta: boolean;
  rawText: string;
}
