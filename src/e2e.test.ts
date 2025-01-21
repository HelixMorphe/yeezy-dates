import { getSuggestions } from './';

describe('E2E', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    vi.useFakeTimers().setSystemTime(new Date(0));
  });

  it('returns empty array for empty input', () => {
    const suggestions = getSuggestions('');

    expect(suggestions).toEqual([]);
  });

  it('returns suggestions for relative time input', () => {
    const inputs = '5';

    const suggestions = getSuggestions(inputs);

    expect(suggestions).toEqual(
      expect.arrayContaining([
        { label: '5 seconds from now', date: expect.any(Date) },
        { label: '5 seconds ago', date: expect.any(Date) },
        { label: '5 minutes from now', date: expect.any(Date) },
        { label: '5 minutes ago', date: expect.any(Date) },
      ]),
    );
  });

  it('returns suggestions for relative weekday input', () => {
    const input = 'next';

    const suggestions = getSuggestions(input);

    expect(suggestions).toEqual(
      expect.arrayContaining([
        { label: 'next monday', date: expect.any(Date) },
        { label: 'next tuesday', date: expect.any(Date) },
        { label: 'next wednesday', date: expect.any(Date) },
        { label: 'next thursday', date: expect.any(Date) },
      ]),
    );
  });
});
