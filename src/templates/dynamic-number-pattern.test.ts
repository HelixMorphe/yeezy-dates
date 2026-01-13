import { DynamicNumberPattern } from './dynamic-number-pattern';

describe('DynamicNumberPattern', () => {
  const DEFAULT_NUMBERS = Array.from({ length: 60 }, (_, i) => i + 1);

  describe('values', () => {
    it('returns default values (1-60) when no custom values provided', () => {
      const pattern = new DynamicNumberPattern();

      expect(pattern.values).toEqual(DEFAULT_NUMBERS);
    });

    it('returns custom default values when provided', () => {
      const customValues = [1, 2, 3];
      const pattern = new DynamicNumberPattern(customValues);

      expect(pattern.values).toEqual(customValues);
    });
  });

  describe('key', () => {
    it('returns "number" as the key', () => {
      const pattern = new DynamicNumberPattern();

      expect(pattern.key).toBe('number');
    });
  });

  describe('getValuesForInput', () => {
    it('extracts number from start of input', () => {
      const pattern = new DynamicNumberPattern();

      expect(pattern.getValuesForInput('100')).toEqual([100]);
    });

    it('extracts number when followed by text', () => {
      const pattern = new DynamicNumberPattern();

      expect(pattern.getValuesForInput('100 days')).toEqual([100]);
    });

    it('extracts large numbers', () => {
      const pattern = new DynamicNumberPattern();

      expect(pattern.getValuesForInput('365')).toEqual([365]);
      expect(pattern.getValuesForInput('9999')).toEqual([9999]);
    });

    it('extracts zero', () => {
      const pattern = new DynamicNumberPattern();

      expect(pattern.getValuesForInput('0')).toEqual([0]);
    });

    it('returns default values when input does not start with a number', () => {
      const pattern = new DynamicNumberPattern();

      expect(pattern.getValuesForInput('tomorrow')).toEqual(DEFAULT_NUMBERS);
    });

    it('returns default values for empty input', () => {
      const pattern = new DynamicNumberPattern();

      expect(pattern.getValuesForInput('')).toEqual(DEFAULT_NUMBERS);
    });

    it('returns default values when number is not at the start', () => {
      const pattern = new DynamicNumberPattern();

      expect(pattern.getValuesForInput('in 5 minutes')).toEqual(DEFAULT_NUMBERS);
    });

    it('uses custom default values when input has no leading number', () => {
      const customValues = [10, 20, 30];
      const pattern = new DynamicNumberPattern(customValues);

      expect(pattern.getValuesForInput('tomorrow')).toEqual(customValues);
    });
  });
});
