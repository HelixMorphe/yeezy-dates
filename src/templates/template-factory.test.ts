import {
  GENERAL_TIME_UNITS,
  RELATIVE_DAYS,
  TIME_OF_DAY,
  TIME_UNITS,
} from '../constants';
import { DynamicNumberPattern } from './dynamic-number-pattern';
import { RelativeDayTemplate } from './relative-day-template';
import { RelativeDayWithTimeTemplate } from './relative-day-with-time-template';
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
}));

vi.mock('./relative-day-template', () => ({
  RelativeDayTemplate: vi.fn().mockReturnValue({
    format: vi.fn().mockReturnValue(''),
  }),
}));

vi.mock('./relative-day-with-time-template', () => ({
  RelativeDayWithTimeTemplate: vi.fn().mockReturnValue({
    format: vi.fn().mockReturnValue(''),
  }),
}));

describe('TemplateFactory', () => {
  it('returns relativeTimeTemplate', () => {
    TemplateFactory.createRelativeTimeTemplate();

    expect(RelativeTimeTemplate).toHaveBeenCalledWith(
      ['{number}', '{unit}', '{direction}'],
      [
        new DynamicNumberPattern(),
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

  it('returns relativeDayTemplate', () => {
    TemplateFactory.createRelativeDayTemplate();

    expect(RelativeDayTemplate).toHaveBeenCalledWith(
      ['relativeDay'],
      [
        {
          key: 'relativeDay',
          values: ['yesterday', 'today', 'tomorrow'],
        },
      ],
      true,
    );
  });

  it('returns relativeDayWithTimeTemplate', () => { 
    TemplateFactory.createRelativeDayWithTimeTemplate();

    expect(RelativeDayWithTimeTemplate).toHaveBeenCalledWith(
      ['relativeDay', 'time'],
      [
        { key: 'relativeDay', values: RELATIVE_DAYS },
        { key: 'time', values: [...GENERAL_TIME_UNITS,...TIME_OF_DAY] },
      ],
    );
  });
});
