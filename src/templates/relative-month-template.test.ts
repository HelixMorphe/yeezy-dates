import { RelativeMonthTemplate } from './relative-month-template';

describe('RelativeMonthTemplate', () => {
  let relativeMonthTemplate: RelativeMonthTemplate;

  beforeEach(() => {
    relativeMonthTemplate = new RelativeMonthTemplate(
      ['relativeMonth'],
      [{ key: 'relativeMonth', values: ['this month', 'next month', 'last month'] }],
    );
  });

  it('should format "this month"', () => {
    const formatted = relativeMonthTemplate.format(['this month']);

    expect(formatted).toEqual('this month');
  });

  it('should format "next month"', () => {
    const formatted = relativeMonthTemplate.format(['next month']);

    expect(formatted).toEqual('next month');
  });

  it('should format "last month"', () => {
    const formatted = relativeMonthTemplate.format(['last month']);

    expect(formatted).toEqual('last month');
  });
});
