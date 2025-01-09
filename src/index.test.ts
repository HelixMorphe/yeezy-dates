import { parseDate } from 'chrono-node';
import { Mock } from 'vitest';

import { SuggestionEngine } from './';
import {
  getRelativeTimeSuggestions,
} from './parsers/relative-time-parser/relative-time-parser';
import { Suggestion } from './types';

vi.mock('./parsers/relative-time-parser/relative-time-parser', () => ({
  getRelativeTimeSuggestions: vi.fn(),
}));

vi.mock('chrono-node', () => ({
  parseDate: vi.fn(),
}));

describe('SuggestionEngine', () => {
  describe('getSuggestions', () => {
    let suggestionEngine: SuggestionEngine;
    let mockValuesFromParsers: Suggestion[] = [{ label: 'today', date: new Date('2021-01-01') }];

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

    it('falls back to chrono node if no parsers match', () => {
      const input = '1 min ago';
      const mockDate = new Date('2021-01-01');
      (getRelativeTimeSuggestions as Mock).mockReturnValue([]);
      (parseDate as Mock).mockReturnValue(mockDate);

      const suggestions = suggestionEngine.getSuggestions(input);

      expect(suggestions).toEqual([{ label: input, date: mockDate }]);
      expect(parseDate).toHaveBeenCalledWith(input);
    });
  });
});
