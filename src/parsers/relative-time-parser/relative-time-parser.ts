import { OffsetTemplate } from '../../templates/offset-template';
import { Suggestion } from '../../types';

export const getRelativeTimeSuggestions = (input: string): Suggestion[] => {
  const templates = [OffsetTemplate];
  let suggestions: Suggestion[] = [];

  templates.forEach((template) => {
    const isMatching = template.isMatching(input);
    if (isMatching) {
      const matchingValues = template.getMatchingValues(input);
      suggestions = suggestions.concat(matchingValues as unknown as Suggestion[]);
    }
  });

  return suggestions;
};
