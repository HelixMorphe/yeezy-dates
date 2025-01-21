export type Suggestion = {
  label: string;
  date: Date;
};

export type PatternValue = string | number;

export interface Pattern {
  readonly key: string;
  readonly values: PatternValue[];
}

export interface Template {
  readonly parts: string[];
  readonly patterns: Pattern[];
  readonly supportsEmptyInput?: boolean;
  format(values: string[]): string;
}
export interface SuggestionService {
  getSuggestions(input: string, limit?: number): Suggestion[];
}
