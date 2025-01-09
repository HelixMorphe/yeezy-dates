import { Chrono } from 'chrono-node';

import { BaseTimeTemplates } from '../../templates/base-time-templates';
import {
  Suggestion,
  Template,
} from '../../types';

const chrono = new Chrono();

export const getRelativeTimeSuggestions = (input: string): Suggestion[] => {
  const templates = [BaseTimeTemplates];

  return getSuggestionsFromTemplates(input, templates);
};

function getSuggestionsFromTemplates(input: string, templates: Template[]): Suggestion[] {
  let suggestions: Suggestion[] = [];

  templates.forEach((template) => {
    const isMatching = template.isMatching(input);

    if (isMatching) {
      const matchingValues = template.getMatchingValues(input);
      suggestions = suggestions.concat(getDatesForValues(matchingValues));
    }
  });

  return suggestions;
}

function getDatesForValues(values: string[]): Suggestion[] {
  return values.map((value) => {
    return {
      label: value,
      date: chrono.parseDate(value) as Date,
    };
  });
}
