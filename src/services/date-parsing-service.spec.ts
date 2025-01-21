import { parseDate } from 'chrono-node';
import { Mock } from 'vitest';

import { DateParsingService } from './date-parsing-service';

vi.mock('chrono-node', () => ({
  parseDate: vi.fn().mockReturnValue(new Date('2021-01-01')),
}))

describe('DateParsingService', () => { 
  it('should parse date', () => {
    const input = '10 minutes from now';
    const date = DateParsingService.parse(input);

    expect(parseDate).toHaveBeenCalledWith(input);
    expect(date).toEqual({ label: '10 minutes from now', date: new Date('2021-01-01') });
  });

  it('returns null if date cannot be parsed', () => {
    (parseDate as Mock).mockReturnValue(null);
    const input = 'invalid date';
    const date = DateParsingService.parse(input);

    expect(date).toBeNull();
    expect(parseDate).toHaveBeenCalledWith('invalid date');
   });
})