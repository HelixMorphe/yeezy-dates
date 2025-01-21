import {
  Pattern,
  Template,
} from '../types';

export abstract class BaseTemplate implements Template{
  constructor(
    readonly parts: string[],
    readonly patterns: Pattern[]
  ) {}

  abstract format(values: string[]): string;
}