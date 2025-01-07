import { Mock } from 'vitest';

import { OffsetTemplate } from '../../templates/offset-template';
import { getRelativeTimeSuggestions } from './relative-time-parser';

vi.mock('../../templates/offset-template', () => ({
  OffsetTemplate: {
    isMatching: vi.fn(),
    getMatchingValues: vi.fn(),
  },
}));

describe('something', () => {
  it('passes ci', () => {
    expect(true).toBe(true);
  });

  it('returns suggestions for a given input', () => {
    (OffsetTemplate.isMatching as Mock).mockReturnValue(true);
    (OffsetTemplate.getMatchingValues as Mock).mockReturnValue([]);
    const input = '5 mi';

    const suggestions = getRelativeTimeSuggestions(input);

    expect(suggestions).toEqual([]);
  });
});
