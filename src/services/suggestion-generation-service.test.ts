import { Template } from '../types';
import { SuggestionGenerationService } from './suggestion-generation-service';

describe('SuggestionGenerationService', () => {
  let suggestionGenerationService: SuggestionGenerationService;
  let mockTemplate: Template = {
    parts: ['part1', 'part2'],
    patterns: [
      {
        key: 'key1',
        values: ['value1'],
      },
      {
        key: 'key2',
        values: ['value2', 'value3'],
      },
    ],
    format: (values: string[]) => values.join('-'),
  };

  beforeEach(() => {
    suggestionGenerationService = new SuggestionGenerationService();
  });

  it('should generate all possible suggestions', () => {
    const suggestions = suggestionGenerationService.generate(mockTemplate, 5);

    expect(suggestions).toEqual(['value1-value2', 'value1-value3']);
  });

  it('should stop generating suggestions when limit is reached', () => {
    const suggestions = suggestionGenerationService.generate(mockTemplate, 1);

    expect(suggestions.length).toEqual(1);
  });

  it('throws an error when template parts and patterns length mismatch', () => {
    const mockTemplateMismatch: Template = {
      parts: ['part1', 'part2'],
      patterns: [
        {
          key: 'key1',
          values: ['value1'],
        },
      ],
      format: (values: string[]) => values.join('-'),
    };

    expect(() => suggestionGenerationService.generate(mockTemplateMismatch, 5)).toThrowError(
      'Template parts and patterns length',
    );
  });

  it('returns empty array when parts in template is empty', () => { 
    const mockTemplateEmpty: Template = {
      parts: [],
      patterns: [],
      format: (values: string[]) => values.join('-'),
    };

    const suggestions = suggestionGenerationService.generate(mockTemplateEmpty, 5);

    expect(suggestions).toEqual([]);
  })
});
