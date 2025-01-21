import { TemplateRepository } from '../repositories/template-repository';
import {
  Suggestion,
  SuggestionService,
} from '../types';
import { SuggestionFilterService } from './suggestion-filter-service';
import { SuggestionGenerationService } from './suggestion-generation-service';

export class TemplateSuggestionService implements SuggestionService {
  constructor(
    private readonly repository: TemplateRepository,
    private readonly generationService: SuggestionGenerationService,
    private readonly filterService: SuggestionFilterService,
  ) {}

  getSuggestions(input: string, limit: number = 5): Suggestion[] {
    const templates = this.repository.getAll();

    const suggestions: string[] = [];

    for (const template of templates) {
      const templateSuggestions = this.generationService.generate(template, Infinity);
      suggestions.push(...templateSuggestions);

      if (suggestions.length >= limit) break;
    }

    const filteredSuggestions = this.filterService.filter(suggestions, input).slice(0, limit);

    return filteredSuggestions.map((label) => ({ label, date: new Date() }));
  }
}
