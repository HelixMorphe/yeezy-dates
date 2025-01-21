import { TIME_UNITS } from '../constants';
import { RelativeTimeTemplate } from './relative-time-template';
import { RelativeWeekdayTemplate } from './relative-weekday-template';
import { SimplePattern } from './simple-pattern';
import { TemplateFactory } from './template-factory';

vi.mock('./relative-time-template', () => ({
  RelativeTimeTemplate: vi.fn().mockReturnValue({
    format: vi.fn().mockReturnValue(''),
  }),
}));

vi.mock('./relative-weekday-template', () => ({
  RelativeWeekdayTemplate: vi.fn().mockReturnValue({
    format: vi.fn().mockReturnValue(''),
  }),
}))

describe('TemplateFactory', () => {
  it('returns relativeTimeTemplate', () => {
    TemplateFactory.createRelativeTimeTemplate();

    expect(RelativeTimeTemplate).toHaveBeenCalledWith(
      ['{number}', '{unit}', '{direction}'],
      [
        new SimplePattern(
          'number',
          Array.from({ length: 60 }, (_, i) => i + 1),
        ),
        new SimplePattern('unit', TIME_UNITS),
        new SimplePattern('direction', ['from now', 'ago']),
      ],
    );
  });

  it('returns relativeWeekdayTemplate', () => {
    TemplateFactory.createRelativeWeekdayTemplate();

    expect(RelativeWeekdayTemplate).toHaveBeenCalledWith(
      ['relative', 'weekday'],
      [
        {
          key: 'relative',
          values: ['this', 'next', 'last'],
        },
        {
          key: 'weekday',
          values: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        },
      ],
    );
  });
});
