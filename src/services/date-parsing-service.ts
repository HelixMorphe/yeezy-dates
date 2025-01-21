import { parseDate } from 'chrono-node';

import { Suggestion } from '../types';

export class DateParsingService {
  static parse(input: string): Suggestion | null {
    const date = parseDate(input);

    if (date) {
      return { label: input, date };
    }

    return null;
  }
}
