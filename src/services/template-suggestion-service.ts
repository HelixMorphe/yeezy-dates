import {
  Suggestion,
  SuggestionService,
} from '../types';

export class TemplateSuggestionService implements SuggestionService {
  getSuggestions(input: string, templateNames?: string[] | undefined, limit?: number | undefined): Suggestion[] {
    throw new Error('Method not implemented.');
  } 
}