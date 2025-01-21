import {
  Pattern,
  Template,
} from '../types';

export abstract class BaseTemplate implements Template {
  constructor(
    readonly parts: string[],
    readonly patterns: Pattern[],
    readonly supportsEmptyInput: boolean = false,
  ) {}

  abstract format(values: string[]): string;
}
