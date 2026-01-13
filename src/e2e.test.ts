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

  it('returns suggestions for any number input (dynamic number support)', () => {
    const input = '100';

    const suggestions = parseDate(input);

    expect(suggestions).toEqual(
      expect.arrayContaining([
        { label: '100 minutes from now', date: expect.any(Date) },
        { label: '100 minutes ago', date: expect.any(Date) },
        { label: '100 hours from now', date: expect.any(Date) },
        { label: '100 hours ago', date: expect.any(Date) },
      ]),
    );
  });

  it('returns suggestions for large numbers', () => {
    const input = '365 days';

    const suggestions = parseDate(input);

    expect(suggestions).toEqual(
      expect.arrayContaining([
        { label: '365 days from now', date: expect.any(Date) },
        { label: '365 days ago', date: expect.any(Date) },
      ]),
    );
  });

  it('returns suggestions for relative week input', () => {
    const input = 'this week';

    const suggestions = parseDate(input);

    expect(suggestions).toEqual(
      expect.arrayContaining([
        { label: 'this week', date: expect.any(Date) },
      ]),
    );
  });

  it('returns suggestions for relative month input', () => {
    const input = 'next month';

    const suggestions = parseDate(input);

    expect(suggestions).toEqual(
      expect.arrayContaining([
        { label: 'next month', date: expect.any(Date) },
      ]),
    );
  });

  it('returns suggestions for relative year input', () => {
    const input = 'last year';

    const suggestions = parseDate(input);

    expect(suggestions).toEqual(
      expect.arrayContaining([
        { label: 'last year', date: expect.any(Date) },
      ]),
    );
  });

  it('returns suggestions for relative weekend input', () => {
    const input = 'this sat';

    const suggestions = parseDate(input);

    expect(suggestions).toEqual(
      expect.arrayContaining([
        { label: 'this saturday', date: expect.any(Date) },
      ]),
    );
  });
});
