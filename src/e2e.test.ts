import { parseDate } from './';

describe('E2E', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    vi.useFakeTimers().setSystemTime(new Date(0));
  });

  it('returns relative day suggestions for an empty input', () => {
    const suggestions = parseDate('');

    expect(suggestions).toEqual(
      expect.arrayContaining([
        { label: 'yesterday', date: expect.any(Date) },
        { label: 'today', date: expect.any(Date) },
        { label: 'tomorrow', date: expect.any(Date) },
      ]),
    );
  });

  it('returns suggestions for relative time input', () => {
    const inputs = '5';

    const suggestions = parseDate(inputs);

    expect(suggestions).toEqual(
      expect.arrayContaining([
        { label: '5 minutes from now', date: expect.any(Date) },
        { label: '5 minutes ago', date: expect.any(Date) },
      ]),
    );
  });

  it('returns suggestions for relative weekday input', () => {
    const input = 'next';

    const suggestions = parseDate(input);

    expect(suggestions).toEqual(
      expect.arrayContaining([
        { label: 'next monday', date: expect.any(Date) },
        { label: 'next tuesday', date: expect.any(Date) },
        { label: 'next wednesday', date: expect.any(Date) },
        { label: 'next thursday', date: expect.any(Date) },
      ]),
    );
  });

  it('returns suggestions for relative day with time input', () => {
    const input = 'tomorrow at';

    const suggestions = parseDate(input);

    expect(suggestions).toEqual(
      expect.arrayContaining([
        {
          label: 'tomorrow at noon',
          date: expect.any(Date),
        },
        {
          label: 'tomorrow at midnight',
          date: expect.any(Date),
        },
        {
          label: 'tomorrow at 8am',
          date: expect.any(Date),
        },
        {
          label: 'tomorrow at 9am',
          date: expect.any(Date),
        },
      ]),
    );
  });
});
