import { Template } from '../types';
import { TemplateRepository } from './template-repository';

describe('TemplateRepository', () => {
  let templateRepository: TemplateRepository;

  beforeEach(() => {
    vi.clearAllMocks();
    templateRepository = new TemplateRepository();
  });

  it('adds template to repository', () => {
    const mockTemplate: Template = {
      parts: [],
      patterns: [],
      format: function (values: string[]): string {
        return '';
      },
    };

    templateRepository.add('mock_template_1', mockTemplate);

    expect(templateRepository.getAll()).toEqual([mockTemplate]);
  });

  it('gets template from repository', () => {
    const mockTemplate: Template = {
      parts: [],
      patterns: [],
      format: function (values: string[]): string {
        return '';
      },
    };

    templateRepository.add('mock_template_1', mockTemplate);

    expect(templateRepository.get('mock_template_1')).toEqual(mockTemplate);
  });

  it('gets all templates from repository', () => {
    const mockTemplate1: Template = {
      parts: [],
      patterns: [],
      format: function (values: string[]): string {
        return '';
      },
    };

    const mockTemplate2: Template = {
      parts: [],
      patterns: [],
      format: function (values: string[]): string {
        return '';
      },
    };

    templateRepository.add('mock_template_1', mockTemplate1);
    templateRepository.add('mock_template_2', mockTemplate2);

    expect(templateRepository.getAll()).toEqual([mockTemplate1, mockTemplate2]);
   });
});
