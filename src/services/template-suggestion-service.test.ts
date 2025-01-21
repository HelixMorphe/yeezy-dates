import { TemplateRepository } from '../repositories/template-repository';
import { Template } from '../types';
import { SuggestionFilterService } from './suggestion-filter-service';
import { SuggestionGenerationService } from './suggestion-generation-service';
import { TemplateSuggestionService } from './template-suggestion-service';

vi.mock('../repositories/template-repository');
vi.mock('./suggestion-generation-service');
vi.mock('./suggestion-filter-service');

describe('TemplateSuggestionService', () => {
  let repository: TemplateRepository;
  let generationService: SuggestionGenerationService;
  let filterService: SuggestionFilterService;
  let suggestionService: TemplateSuggestionService;

  beforeEach(() => {
    repository = new TemplateRepository();
    generationService = new SuggestionGenerationService();
    filterService = new SuggestionFilterService();

    suggestionService = new TemplateSuggestionService(repository, generationService, filterService);
  });

  it('should get suggestions and apply filtering and limiting', () => {
    const templates: Template[] = [
      { parts: ['part1'], patterns: [], format: vi.fn().mockReturnValue('template1') },
    ];
    
    repository.getAll = vi.fn().mockReturnValue(templates);
    generationService.generate = vi.fn().mockReturnValue(['template1', 'template2']);
    filterService.filter = vi.fn().mockReturnValue(['template1', 'template2']);

    const input = 'temp';
    const limit = 3;
    const suggestions = suggestionService.getSuggestions(input, limit);

    expect(repository.getAll).toHaveBeenCalled();

    templates.forEach((template) => {
      expect(generationService.generate).toHaveBeenCalledWith(template, Infinity);
    });

    expect(filterService.filter).toHaveBeenCalledWith(['template1', 'template2'], input);

    expect(suggestions).toHaveLength(2);
    expect(suggestions[0]).toHaveProperty('label', 'template1');
    expect(suggestions[1]).toHaveProperty('label', 'template2');
  });

  it('should handle empty repository gracefully', () => {
    repository.getAll = vi.fn().mockReturnValue([]);
    filterService.filter = vi.fn().mockReturnValue([]);

    const suggestions = suggestionService.getSuggestions('temp', 5);

    expect(suggestions).toHaveLength(0);
  });

  it('should apply limit correctly', () => {
    const templates: Template[] = [
      { parts: ['part1'], patterns: [], format: vi.fn().mockReturnValue('template1') },
      { parts: ['part2'], patterns: [], format: vi.fn().mockReturnValue('template2') },
      { parts: ['part3'], patterns: [], format: vi.fn().mockReturnValue('template3') },
    ];

    repository.getAll = vi.fn().mockReturnValue(templates);
    generationService.generate = vi.fn().mockReturnValue(['template1', 'template2', 'template3']);
    filterService.filter = vi.fn().mockReturnValue(['template1', 'template2', 'template3']);

    const suggestions = suggestionService.getSuggestions('temp', 2);

    expect(suggestions).toHaveLength(2);
    expect(suggestions[0]).toHaveProperty('label', 'template1');
    expect(suggestions[1]).toHaveProperty('label', 'template2');
  });

  it('should format suggestions correctly', () => {
    const templates: Template[] = [
      { parts: ['part1'], patterns: [], format: vi.fn().mockReturnValue('formattedTemplate1') },
    ];
    
    repository.getAll = vi.fn().mockReturnValue(templates);
    generationService.generate = vi.fn().mockReturnValue(['formattedTemplate1']);
    filterService.filter = vi.fn().mockReturnValue(['formattedTemplate1']);

    const suggestions = suggestionService.getSuggestions('formatted', 3);

    expect(suggestions[0]).toHaveProperty('label', 'formattedTemplate1');
  });

  it('should return an empty array if no matching suggestions are found', () => {
    const templates: Template[] = [
      { parts: ['part1'], patterns: [], format: vi.fn().mockReturnValue('template1') },
    ];

    repository.getAll = vi.fn().mockReturnValue(templates);
    generationService.generate = vi.fn().mockReturnValue(['template1']);
    filterService.filter = vi.fn().mockReturnValue([]);

    const suggestions = suggestionService.getSuggestions('nonmatching', 5);

    expect(suggestions).toHaveLength(0);
  });
});
