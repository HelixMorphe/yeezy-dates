import { RelativeWeekdayTemplate } from './relative-weekday-template';

describe('RelativeWeekdayTemplate', () => {
  let relativeWeekdayTemplate: RelativeWeekdayTemplate;

  beforeEach(() => {
    relativeWeekdayTemplate = new RelativeWeekdayTemplate(
      ['relative', 'weekday'],
      [
        { key: 'relative', values: ['next', 'last'] },
        { key: 'weekday', values: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] },
      ],
    );
  });

  it('should format relative weekday', () => {
    const formatted = relativeWeekdayTemplate.format(['next', 'monday']);

    expect(formatted).toEqual('next monday');
  });

  it('should format relative weekday with last', () => {
    const formatted = relativeWeekdayTemplate.format(['last', 'sunday']);

    expect(formatted).toEqual('last sunday');
  });
});
