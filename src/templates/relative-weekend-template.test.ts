import { RelativeWeekendTemplate } from './relative-weekend-template';

describe('RelativeWeekendTemplate', () => {
  let relativeWeekendTemplate: RelativeWeekendTemplate;

  beforeEach(() => {
    relativeWeekendTemplate = new RelativeWeekendTemplate(
      ['relativeWeekend'],
      [{ key: 'relativeWeekend', values: ['this weekend', 'next weekend', 'last weekend'] }],
    );
  });

  it('should format "this weekend" as "this saturday"', () => {
    const formatted = relativeWeekendTemplate.format(['this weekend']);

    expect(formatted).toEqual('this saturday');
  });

  it('should format "next weekend" as "next saturday"', () => {
    const formatted = relativeWeekendTemplate.format(['next weekend']);

    expect(formatted).toEqual('next saturday');
  });

  it('should format "last weekend" as "last saturday"', () => {
    const formatted = relativeWeekendTemplate.format(['last weekend']);

    expect(formatted).toEqual('last saturday');
  });
});
