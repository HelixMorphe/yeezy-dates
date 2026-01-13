import { RelativeWeekTemplate } from './relative-week-template';

describe('RelativeWeekTemplate', () => {
  let relativeWeekTemplate: RelativeWeekTemplate;

  beforeEach(() => {
    relativeWeekTemplate = new RelativeWeekTemplate(
      ['relativeWeek'],
      [{ key: 'relativeWeek', values: ['this week', 'next week', 'last week'] }],
    );
  });

  it('should format "this week"', () => {
    const formatted = relativeWeekTemplate.format(['this week']);

    expect(formatted).toEqual('this week');
  });

  it('should format "next week"', () => {
    const formatted = relativeWeekTemplate.format(['next week']);

    expect(formatted).toEqual('next week');
  });

  it('should format "last week"', () => {
    const formatted = relativeWeekTemplate.format(['last week']);

    expect(formatted).toEqual('last week');
  });
});
