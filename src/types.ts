export type Suggestion = {
  label: string;
  date: Date;
};

type PatternValue = string | number;

interface Pattern {
  readonly key: string;
  readonly values: PatternValue[];
}

export interface Template {
  readonly parts: string[];
  readonly patterns: Pattern[];
  format(values: string[]): string;
}

interface SuggestionFilter {
  filter(suggestions: string[], input: string): string[];
}

interface SuggestionGenerator {
  generate(template: Template, limit: number): string[];
}

export interface SuggestionService {
  getSuggestions(input: string, templateNames?: string[], limit?: number): Suggestion[];
}