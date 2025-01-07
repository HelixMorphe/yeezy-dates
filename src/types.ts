import { UncheckedSnapshot } from 'vitest';

export type Suggestion = {
  label: string;
  date: Date;
};

export type Config = {};

export type CustomDate = {
  label: string;
  date: Date;
};

export type Template = {
  isMatching(input: string): boolean;
  getMatchingValues(input: string): unknown;
};

export type Rule = {
  type: RuleType;
  values?: string[];
  validator?: (input: string, context: any) => boolean;
};

export enum RuleType {
  Number = 'Number',
  Enum = 'Enum',
}
