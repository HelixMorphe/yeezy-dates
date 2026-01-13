import { Pattern, PatternValue } from '../types';

const DEFAULT_NUMBERS = Array.from({ length: 60 }, (_, i) => i + 1);

export class DynamicNumberPattern implements Pattern {
  readonly key: string = 'number';

  constructor(private readonly defaultValues: PatternValue[] = DEFAULT_NUMBERS) {}

  get values(): PatternValue[] {
    return this.defaultValues;
  }

  getValuesForInput(input: string): PatternValue[] {
    const match = input.match(/^(\d+)/);
    if (match && match[1]) {
      const num = parseInt(match[1], 10);
      return [num];
    }
    return this.defaultValues;
  }
}
