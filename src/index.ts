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

function getSuggestions(input: string): Suggestion[] {
  return templateSuggestionService.getSuggestions(input);
}

export { getSuggestions };

function createDefaultSuggestionService(): TemplateSuggestionService {
  const repository = new TemplateRepository();
  const generationService = new SuggestionGenerationService();
  const filterService = new SuggestionFilterService();

  repository.add('relative-time-template', TemplateFactory.createRelativeTimeTemplate());

  return new TemplateSuggestionService(repository, generationService, filterService);
}
