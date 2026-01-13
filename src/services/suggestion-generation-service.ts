import {
  Pattern,
  PatternValue,
  Template,
} from '../types';

export class SuggestionGenerationService {
  generate(template: Template, limit: number, input?: string): string[] {
    this.validateTemplate(template);

    if (template.parts.length === 0) {
      return [];
    }

    const suggestions: string[] = [];

    const generateCombinations = (current: string[], depth: number): void => {
      if (depth === template.parts.length) {
        suggestions.push(template.format(current));
        return;
      }

      const pattern = template.patterns[depth] as Pattern;
      const values = this.getPatternValues(pattern, input);

      for (const value of values) {
        if (suggestions.length >= limit) return;
        generateCombinations([...current, String(value)], depth + 1);
      }
    };

    generateCombinations([], 0);
    return suggestions.slice(0, limit);
  }

  private getPatternValues(pattern: Pattern, input?: string): PatternValue[] {
    if (input && pattern.getValuesForInput) {
      return pattern.getValuesForInput(input);
    }
    return pattern.values;
  }

  private validateTemplate = (template: Template): void => {
    if (template.parts.length !== template.patterns.length) {
      throw new Error('Template parts and patterns length mismatch');
    }
  };
}
