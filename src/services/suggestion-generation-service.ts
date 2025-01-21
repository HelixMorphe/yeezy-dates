import {
  Pattern,
  Template,
} from '../types';

export class SuggestionGenerationService {
  generate(template: Template, limit: number): string[] {
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

      for (const value of pattern.values) {
        if (suggestions.length >= limit) return;
        generateCombinations([...current, String(value)], depth + 1);
      }
    };

    generateCombinations([], 0);
    return suggestions.slice(0, limit);
  }

  private validateTemplate = (template: Template): void => {
    if (template.parts.length !== template.patterns.length) {
      throw new Error('Template parts and patterns length mismatch');
    }
  };
}
