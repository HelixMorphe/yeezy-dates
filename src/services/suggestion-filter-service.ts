export class SuggestionFilterService {
  filter(suggestions: string[], input: string): string[] {
    if (!input) return suggestions;
    const lowerInput = input.toLowerCase();
    return suggestions.filter((suggestion) => suggestion.toLowerCase().startsWith(lowerInput));
  }
}
