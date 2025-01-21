import { TemplateRepository } from '../repositories/template-repository';
import {
  Suggestion,
  SuggestionService,
  Template,
} from '../types';
import { DateParsingService } from './date-parsing-service';
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
    
    const suggestionsFromTemplates = this.getSuggestionsFromTemplates(templates, input, limit);
    const filteredSuggestions = this.filterService.filter(suggestionsFromTemplates, input).slice(0, limit);

    return this.getParsedSuggestions(filteredSuggestions);
  }

  private getSuggestionsFromTemplates(templates: Template[], input: string, limit: number): string[] {
    const suggestions: string[] = [];

    for (const template of templates) {
      const templateSuggestions = this.generationService.generate(template, Infinity);
      suggestions.push(...templateSuggestions);

      if (suggestions.length >= limit) break;
    }

    return suggestions;
  }

  private getParsedSuggestions(suggestions: string[]): Suggestion[] {
    const result: Suggestion[] = [];

    for (const suggestion of suggestions) {
      const date = DateParsingService.parse(suggestion);

      if (!date) continue;
      result.push(date);
    }

    return result;
  }
}
