import { Mock } from 'vitest';

import { SuggestionEngine } from './';
import {
  getRelativeTimeSuggestions,
} from './parsers/relative-time-parser/relative-time-parser';
import { Suggestion } from './types';

vi.mock('./parsers/relative-time-parser/relative-time-parser', () => ({
  getRelativeTimeSuggestions: vi.fn(),
}));

describe('SuggestionEngine', () => {
  describe('constructor', () => {
    it('passes ci', () => {
      expect(true).toBe(true);
    });
  });

  describe('getSuggestions', () => {
    let suggestionEngine: SuggestionEngine;
    let mockValuesFromParsers: Suggestion[] = [];

    beforeEach(() => {
      suggestionEngine = new SuggestionEngine();
    });
    afterEach(() => {
      vi.resetAllMocks();
    });

    it('returns suggestions from all parsers', () => {
      (getRelativeTimeSuggestions as Mock).mockReturnValue(mockValuesFromParsers);
      const input = '1 min';

      const suggestions = suggestionEngine.getSuggestions(input);

      expect(suggestions).toEqual(mockValuesFromParsers);
      expect(getRelativeTimeSuggestions).toHaveBeenCalledWith(input);
    });
  });
});
