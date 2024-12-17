import { parseDate } from 'chrono-node';

import {
  getRelativeSuggestions,
} from './engines/relative-time-engine/relative-time-engine';
import { Suggestion } from './types';

export function getSuggestions(input: string): Suggestion[] {
  const relativeTimeSuggestions = getRelativeSuggestions(input);
  if (relativeTimeSuggestions.length === 0) {
    const date = parseDate(input);
    if (date === null) {
      return [];
    }
    return [{ label: input, date: date }];
  }

  return relativeTimeSuggestions;
}
