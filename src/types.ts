export type Suggestion = {
  label: string;
  date: Date;
};

// export type Config = {};

// export type CustomDate = {
//   label: string;
//   date: Date;
// };

// export type Template = {
//   isMatching(input: string): boolean;
//   getMatchingValues(input: string): string[];
// };

// export type Rule = {
//   type: RuleType;
//   values?: string[];
//   validator?: (input: string, context: any) => boolean;
// };

// export enum RuleType {
//   Number = 'Number',
//   Enum = 'Enum',
// }


type PatternValue = string | number;

interface Pattern {
  readonly key: string;
  readonly values: PatternValue[];
}

interface Template {
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

interface TemplateRepository {
  get(name: string): Template | undefined;
  getAll(): Template[];
  add(name: string, template: Template): void;
}

export interface SuggestionService {
  getSuggestions(input: string, templateNames?: string[], limit?: number): Suggestion[];
}