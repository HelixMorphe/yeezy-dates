export type Suggestion = {
  label: string;
  date: Date;
};

type PatternValue = string | number;

export interface Pattern {
  readonly key: string;
  readonly values: PatternValue[];
}

export interface Template {
  readonly parts: string[];
  readonly patterns: Pattern[];
  format(values: string[]): string;
}
export interface SuggestionService {
  getSuggestions(input: string, templateNames?: string[], limit?: number): Suggestion[];
}
