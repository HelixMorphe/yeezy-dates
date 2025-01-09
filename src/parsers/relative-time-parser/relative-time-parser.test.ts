import { Mock } from 'vitest';

import { BaseTimeTemplates } from '../../templates/base-time-templates';
import { OffsetTemplate } from '../../templates/offset-template';
import { getRelativeTimeSuggestions } from './relative-time-parser';

vi.mock('../../templates/offset-template', () => ({
  OffsetTemplate: {
    isMatching: vi.fn().mockReturnValue(false),
    getMatchingValues: vi.fn(),
  },
}));

vi.mock('../../templates/base-time-templates', () => ({
  BaseTimeTemplates: {
    isMatching: vi.fn().mockReturnValue(true),
    getMatchingValues: vi.fn(),
  },
}));

vi.mock('chrono-node', () => ({
  Chrono: vi.fn().mockReturnValue({
    parseDate: vi.fn().mockReturnValue(new Date('2021-01-01')),
  }),
}));

describe('relative time parser', () => {
  const mockDate = new Date('2021-01-01');

  beforeAll(() => {
    vi.useFakeTimers().setSystemTime(mockDate);
  });

  afterAll(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it('returns suggestions with label and date for a given input', () => {
    (OffsetTemplate.isMatching as Mock).mockReturnValue(false);
    (BaseTimeTemplates.isMatching as Mock).mockReturnValue(true);
    (BaseTimeTemplates.getMatchingValues as Mock).mockReturnValue(['today', 'tomorrow']);

    const input = 'tod';

    const suggestions = getRelativeTimeSuggestions(input);

    expect(suggestions).toEqual([
      {
        label: 'today',
        date: mockDate,
      },
      {
        label: 'tomorrow',
        date: mockDate,
      },
    ]);
  });
});
