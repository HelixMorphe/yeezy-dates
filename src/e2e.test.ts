import { Chrono } from 'chrono-node';

import { SuggestionEngine } from './';

describe('e2e', () => {
  beforeAll(() => {
    vi.useFakeTimers().setSystemTime(new Date('2025-01-01T00:00:00Z'));
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  const suggestionEngine = new SuggestionEngine();
  const chrono = new Chrono();

  it('returns default suggestions for an empty input', () => {
    const input = '';
    const suggestions = suggestionEngine.getSuggestions(input);

    expect(suggestions).toEqual([
      {
        label: 'today',
        date: chrono.parseDate('today'),
      },
      {
        label: 'tomorrow',
        date: chrono.parseDate('tomorrow'),
      },
      {
        label: 'yesterday',
        date: chrono.parseDate('yesterday'),
      },
    ]);
  });

  it('returns suggestion if template is unknown and the input is a valid date', () => { 
    const input = '5pm tomorrow';
    const suggestions = suggestionEngine.getSuggestions(input);

    expect(suggestions).toEqual([
      {
        label: input,
        date: chrono.parseDate(input),
      },
    ]);
  });
});
