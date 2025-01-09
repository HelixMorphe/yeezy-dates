import { parseDate } from 'chrono-node';

import {
  getRelativeTimeSuggestions,
} from './parsers/relative-time-parser/relative-time-parser';
import {
  Config,
  Suggestion,
} from './types';

const defaultConfig: Config = {};

export class SuggestionEngine {
  private readonly config: Config;

  constructor(config: Config = defaultConfig) {
    this.config = config;
  }

  getSuggestions(input: string): Suggestion[] {
    const relativeTimeSuggestions = getRelativeTimeSuggestions(input);
    if (relativeTimeSuggestions.length === 0) { 
      const date = parseDate(input);

      if (date) {
        return [{ label: input, date }];
      }
    }
    return [...relativeTimeSuggestions];
  }
}
