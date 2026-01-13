import {
  GENERAL_TIME_UNITS,
  RELATIVE_DAYS,
  RELATIVE_MONTHS,
  RELATIVE_WEEKENDS,
  RELATIVE_WEEKS,
  RELATIVE_YEARS,
  TIME_OF_DAY,
  TIME_UNITS,
  WEEKDAYS,
} from '../constants';
import { Template } from '../types';
import { DynamicNumberPattern } from './dynamic-number-pattern';
import { RelativeDayTemplate } from './relative-day-template';
import { RelativeDayWithTimeTemplate } from './relative-day-with-time-template';
import { RelativeTimeTemplate } from './relative-time-template';
import { RelativeWeekdayTemplate } from './relative-weekday-template';
import { RelativeWeekTemplate } from './relative-week-template';
import { RelativeMonthTemplate } from './relative-month-template';
import { RelativeYearTemplate } from './relative-year-template';
import { RelativeWeekendTemplate } from './relative-weekend-template';
import { SimplePattern } from './simple-pattern';

export class TemplateFactory {
  static createRelativeTimeTemplate(): Template {
    return new RelativeTimeTemplate(
      ['{number}', '{unit}', '{direction}'],
      [
        new DynamicNumberPattern(),
        new SimplePattern('unit', TIME_UNITS),
        new SimplePattern('direction', ['from now', 'ago']),
      ],
    );
  }

  static createRelativeWeekdayTemplate(): Template {
    return new RelativeWeekdayTemplate(
      ['relative', 'weekday'],
      [
        {
          key: 'relative',
          values: ['this', 'next', 'last'],
        },
        {
          key: 'weekday',
          values: WEEKDAYS,
        },
      ],
    );
  }

  static createRelativeDayTemplate(): Template {
    return new RelativeDayTemplate(
      ['relativeDay'],
      [
        {
          key: 'relativeDay',
          values: RELATIVE_DAYS,
        },
      ],
      true,
    );
  }

  static createRelativeDayWithTimeTemplate(): Template {
    return new RelativeDayWithTimeTemplate(
      ['relativeDay', 'time'],
      [
        { key: 'relativeDay', values: RELATIVE_DAYS },
        { key: 'time', values: [...GENERAL_TIME_UNITS, ...TIME_OF_DAY] },
      ],
    );
  }

  static createRelativeWeekTemplate(): Template {
    return new RelativeWeekTemplate(
      ['relativeWeek'],
      [
        {
          key: 'relativeWeek',
          values: RELATIVE_WEEKS,
        },
      ],
    );
  }

  static createRelativeMonthTemplate(): Template {
    return new RelativeMonthTemplate(
      ['relativeMonth'],
      [
        {
          key: 'relativeMonth',
          values: RELATIVE_MONTHS,
        },
      ],
    );
  }

  static createRelativeYearTemplate(): Template {
    return new RelativeYearTemplate(
      ['relativeYear'],
      [
        {
          key: 'relativeYear',
          values: RELATIVE_YEARS,
        },
      ],
    );
  }

  static createRelativeWeekendTemplate(): Template {
    return new RelativeWeekendTemplate(
      ['relativeWeekend'],
      [
        {
          key: 'relativeWeekend',
          values: RELATIVE_WEEKENDS,
        },
      ],
    );
  }
}
