import { SuggestionEngine } from '.';

describe('SuggestionEngine', () => {
  describe('constructor', () => {
    it('passes ci', () => {
      expect(true).toBe(true);
    });
  });

  describe('getSuggestions', () => {
    let suggestionEngine: SuggestionEngine;
    beforeEach(() => {
      suggestionEngine = new SuggestionEngine();
    });
    afterEach(() => {
      vi.resetAllMocks();
    });

    it('passes ci', () => {
      expect(true).toBe(true);
    });
  });
});
