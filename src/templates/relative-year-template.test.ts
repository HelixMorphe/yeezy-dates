import { RelativeYearTemplate } from './relative-year-template';

describe('RelativeYearTemplate', () => {
  let relativeYearTemplate: RelativeYearTemplate;

  beforeEach(() => {
    relativeYearTemplate = new RelativeYearTemplate(
      ['relativeYear'],
      [{ key: 'relativeYear', values: ['this year', 'next year', 'last year'] }],
    );
  });

  it('should format "this year"', () => {
    const formatted = relativeYearTemplate.format(['this year']);

    expect(formatted).toEqual('this year');
  });

  it('should format "next year"', () => {
    const formatted = relativeYearTemplate.format(['next year']);

    expect(formatted).toEqual('next year');
  });

  it('should format "last year"', () => {
    const formatted = relativeYearTemplate.format(['last year']);

    expect(formatted).toEqual('last year');
  });
});
