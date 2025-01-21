import { RelativeTimeTemplate } from './relative-time-template';

describe('RelativeTimeTemplate', () => {
  let relativeTimeTemplate: RelativeTimeTemplate;

  beforeEach(() => {
    relativeTimeTemplate = new RelativeTimeTemplate(
      ['number', 'unit', 'direction'],
      [
        { key: 'number', values: ['1', '5', '10'] },
        { key: 'unit', values: ['minute', 'minutes', 'hour', 'hours', 'day', 'days'] },
        { key: 'direction', values: ['ago', 'from now'] },
      ],
    );
  });

  it('should format relative time', () => {
    const formatted = relativeTimeTemplate.format(['5', 'minutes', 'ago']);

    expect(formatted).toEqual('5 minutes ago');
  });

  it('should format relative time with singular unit', () => {
    const formatted = relativeTimeTemplate.format(['1', 'hours', 'from now']);

    expect(formatted).toEqual('1 hour from now');
  });
});
