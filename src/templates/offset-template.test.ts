import { OffsetTemplate } from './offset-template';

describe('OffsetTemplate', () => {
  describe('isMatching', () => {
    it('returns false if input is empty', () => {
      const input = ' ';

      const isMatching = OffsetTemplate.isMatching(input);

      expect(isMatching).toBe(false);
    });

    it('returns true if the first word is a number', () => {
      const inputs = ['0', '11', '222'];

      inputs.forEach((input) => {
        const isMatching = OffsetTemplate.isMatching(input);

        expect(isMatching).toBe(true);
      });
    });

    it.each(['a', 'a1', '1a'])('returns false if the input does not start with a number %s', (input) => {
      const isMatching = OffsetTemplate.isMatching(input);
      expect(isMatching).toBe(false);
    });

    it('returns false if the second word is not partially matching a valid term', () => {
      const input = '5 some_random_word';

      const isMatching = OffsetTemplate.isMatching(input);

      expect(isMatching).toBe(false);
    });

    it('returns true if the second word is partially matching a valid term', () => {
      const inputs = ['5 mi', '5 h', '5 d', '5 we', '5 mo', '5 y'];

      inputs.forEach((input) => {
        const isMatching = OffsetTemplate.isMatching(input);
        expect(isMatching).toBe(true);
      });
    });

    it('returns false if the third word is not partially matching a valid term', () => {
      const input = '5 days some_random_word';

      const isMatching = OffsetTemplate.isMatching(input);

      expect(isMatching).toBe(false);
    });

    it('returns true if the third word is partially matching a valid term', () => {
      const inputs = ['5 days ag', '5 days from'];

      inputs.forEach((input) => {
        const isMatching = OffsetTemplate.isMatching(input);
        expect(isMatching).toBe(true);
      });
    });

    it.each([
      '5',
      '5 days',
      '5 minutes',
      '5 weeks',
      '5 months',
      '5 hours',
      '5 years',
      '5 minutes ago',
      '5 years from now',
    ])('returns true for all the matching patterns %s', (input) => {
      const isMatching = OffsetTemplate.isMatching(input);

      expect(isMatching).toBe(true);
    });

    it('returns false if the input contains an extra word', () => {
      const input = '5 days ago extra_word';

      const isMatching = OffsetTemplate.isMatching(input);

      expect(isMatching).toBe(false);
    });
  });
});
