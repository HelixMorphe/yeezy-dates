import { SuggestionFilterService } from './suggestion-filter-service';

describe('SuggestionFilterService', () => {
  let suggestionFilterService: SuggestionFilterService;

  beforeEach(() => {
    suggestionFilterService = new SuggestionFilterService();
  });

  it('filters suggestions by input', () => {
    const suggestions = ['suggestion1', 'suggestion2', 'suggestion3'];
    const input = 'suggestion1';

    const filteredSuggestions = suggestionFilterService.filter(suggestions, input);

    expect(filteredSuggestions).toEqual(['suggestion1']);
  });

  it('filters suggestions by input case insensitive', () => {
    const suggestions = ['suggestion1', 'suggestion2', 'suggestion3'];
    const input = 'SUGGESTION1';

    const filteredSuggestions = suggestionFilterService.filter(suggestions, input);

    expect(filteredSuggestions).toEqual(['suggestion1']);
  });

  it('returns all suggestions when input is empty', () => {
    const suggestions = ['suggestion1', 'suggestion2', 'suggestion3'];
    const input = '';

    const filteredSuggestions = suggestionFilterService.filter(suggestions, input);

    expect(filteredSuggestions).toEqual(suggestions);
  });

  it('filters suggestions by input based on prefix', () => {
    const suggestions = ['suggestion1', 'suggestion2', 'suggestion3'];
    const input = 'sug';

    const filteredSuggestions = suggestionFilterService.filter(suggestions, input);

    expect(filteredSuggestions).toEqual(['suggestion1', 'suggestion2', 'suggestion3']);
  });

  it('returns empty array when no suggestions match input', () => {
    const suggestions = ['suggestion1', 'suggestion2', 'suggestion3'];
    const input = 'suggestion4';

    const filteredSuggestions = suggestionFilterService.filter(suggestions, input);

    expect(filteredSuggestions).toEqual([]);
  });
});
