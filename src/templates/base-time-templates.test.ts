import { BaseTimeTemplates } from './base-time-templates';

describe('BaseTimeTemplate', () => {
  describe('isMatching', () => {
    it.each(['t', 'to', 'tod', 'tom', 'y', 'yes', 't', 'n', 'no'])(
      'returns true for substrings of %s',
      (input: string) => {
        const result = BaseTimeTemplates.isMatching(input);

        expect(result).toBe(true);
      },
    );

    it('trims the input before checking for matching', () => { 
      const input = '   t   ';
      const result = BaseTimeTemplates.isMatching(input);

      expect(result).toBe(true);
    })
  });
});
