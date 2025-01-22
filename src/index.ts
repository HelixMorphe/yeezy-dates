import { TemplateRepository } from './repositories/template-repository';
import { SuggestionFilterService } from './services/suggestion-filter-service';
import {
  SuggestionGenerationService,
} from './services/suggestion-generation-service';
import {
  TemplateSuggestionService,
} from './services/template-suggestion-service';
import { TemplateFactory } from './templates/template-factory';
import { Suggestion } from './types';

const templateSuggestionService = createDefaultSuggestionService();

function parseDate(input: string): Suggestion[] {
  const trimmedInput = input.trim();
  return templateSuggestionService.getSuggestions(trimmedInput);
}

export { parseDate };

function createDefaultSuggestionService(): TemplateSuggestionService {
  const repository = new TemplateRepository();
  const generationService = new SuggestionGenerationService();
  const filterService = new SuggestionFilterService();

  repository.add('relative-time-template', TemplateFactory.createRelativeTimeTemplate());
  repository.add('relative-weekday-template', TemplateFactory.createRelativeWeekdayTemplate())
  repository.add('relative-day-template', TemplateFactory.createRelativeDayTemplate());

  return new TemplateSuggestionService(repository, generationService, filterService);
}
