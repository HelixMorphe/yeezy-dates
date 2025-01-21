import {
  TemplateSuggestionService,
} from './services/template-suggestion-service';
import { Suggestion } from './types';

const templateSuggestionService = new TemplateSuggestionService();

function getSuggestions(input: string): Suggestion[] {
  return templateSuggestionService.getSuggestions(input);
}

export { getSuggestions };
