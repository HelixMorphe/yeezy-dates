import { Mock } from 'vitest';

import { parseDate } from './index';
import {
  TemplateSuggestionService,
} from './services/template-suggestion-service';

vi.mock('./services/template-suggestion-service', () => ({
  TemplateSuggestionService: vi.fn().mockReturnValue({
    getSuggestions: vi.fn().mockReturnValue([]),
  }),
}));

describe('parseDate', () => {
  const mockTemplateEngine = new TemplateSuggestionService({} as any, {} as any, {} as any);

  beforeEach(() => {
    vi.clearAllMocks();
    vi.useFakeTimers().setSystemTime(0);
  });

  it('intializes template suggestion service with default config and returns suggestions', () => {
    const mockSuggestions = [{ label: '1', date: new Date() }];
    (mockTemplateEngine.getSuggestions as Mock).mockReturnValue(mockSuggestions);
    const input = '1';

    const suggestions = parseDate(input);

    expect(mockTemplateEngine.getSuggestions).toHaveBeenCalledWith(input);
    expect(suggestions).toEqual(mockSuggestions);
  });

  it('returns empty array if no suggestions are found from chrono node and suggestion service', () => {
    (mockTemplateEngine.getSuggestions as Mock).mockReturnValue([]);
    const input = '5 minutes ago';

    const suggestions = parseDate(input);

    expect(suggestions).toEqual([]);
  });

  it('trims whitespace from input', () => { 
    const input = ' 5 minutes ago ';
    const trimmedInput = '5 minutes ago';

    parseDate(input);

    expect(mockTemplateEngine.getSuggestions).toHaveBeenCalledWith(trimmedInput);
  });
});
