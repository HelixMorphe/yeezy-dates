import { RelativeDayWithTimeTemplate } from './relative-day-with-time-template';

describe('RelativeDayWithTimeTemplate', () => {
  let relativeDayWithTimeTemplate: RelativeDayWithTimeTemplate;

  beforeEach(() => {
    relativeDayWithTimeTemplate = new RelativeDayWithTimeTemplate(
      ['relativeDay', 'time'],
      [
        { key: 'relativeDay', values: ['yesterday', 'today', 'tomorrow'] },
        { key: 'time', values: ['morning', 'afternoon', 'evening', 'night'] },
      ],
    );
  });

  it('should format relative day with time', () => {
    const formatted = relativeDayWithTimeTemplate.format(['yesterday', 'morning']);

    expect(formatted).toEqual('yesterday at morning');
  });

  it('should format relative day with today and time', () => {
    const formatted = relativeDayWithTimeTemplate.format(['today', 'afternoon']);

    expect(formatted).toEqual('today at afternoon');
  });

  it('should format relative day with tomorrow and time', () => {
    const formatted = relativeDayWithTimeTemplate.format(['tomorrow', 'evening']);

    expect(formatted).toEqual('tomorrow at evening');
  });
 })