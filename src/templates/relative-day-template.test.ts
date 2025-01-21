import { RelativeDayTemplate } from './relative-day-template';

describe('RelativeDayTemplate', () => {
  let relativeDayTemplate: RelativeDayTemplate;

  beforeEach(() => {
    relativeDayTemplate = new RelativeDayTemplate(
      ['relativeDay'],
      [
        { key: 'relativeDay', values: ['yesterday', 'today', 'tomorrow'] },
      ],
    );
  });

  it('should format relative day', () => {
    const formatted = relativeDayTemplate.format(['yesterday']);

    expect(formatted).toEqual('yesterday');
  });

  it('should format relative day with today', () => {
    const formatted = relativeDayTemplate.format(['today']);

    expect(formatted).toEqual('today');
  });

  it('should format relative day with tomorrow', () => {
    const formatted = relativeDayTemplate.format(['tomorrow']);

    expect(formatted).toEqual('tomorrow');
  });
})