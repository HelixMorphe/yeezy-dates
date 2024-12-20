import { getSuggestions } from './';
import { getRelativeSuggestions } from './engines/relative-time-engine/relative-time-engine';
import { parseDate } from 'chrono-node';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, Mock, vi } from 'vitest';

vi.mock('chrono-node', () => ({
  parseDate: vi.fn().mockReturnValue('2021-01-01'),
}));

vi.mock('./engines/relative-time-engine/relative-time-engine', () => ({
  getRelativeSuggestions: vi.fn(),
}));

describe('getSuggestions', () => {
  beforeAll(() => {
    vi.useFakeTimers().setSystemTime(new Date());
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  beforeEach(() => {});

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('calls relative time engine to get suggestions', () => {
    (getRelativeSuggestions as Mock).mockReturnValue([
      {
        label: 'today',
        value: 'today',
      },
    ]);
    const input = 'today';

    const result = getSuggestions(input);

    expect(result).toEqual([
      {
        label: 'today',
        value: 'today',
      },
    ]);
    expect(getRelativeSuggestions).toHaveBeenCalledWith(input);
  });

  it('calls chrono node to parse date if nothing is suggested from relative time engine', () => {
    (getRelativeSuggestions as Mock).mockReturnValue([]);
    (parseDate as Mock).mockReturnValue(new Date());

    const input = 'today';
    const result = getSuggestions(input);

    expect(result).toEqual([{ label: input, date: new Date() }]);
    expect(parseDate).toHaveBeenCalledWith(input);
  });

  it('returns an empty array if chrono node cannot parse the date', () => {
    (getRelativeSuggestions as Mock).mockReturnValue([]);
    (parseDate as Mock).mockReturnValue(null);

    const input = 'today';
    const result = getSuggestions(input);

    expect(result).toEqual([]);
  });
});
