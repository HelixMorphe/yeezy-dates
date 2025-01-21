import {
  RELATIVE_DAYS,
  TIME_UNITS,
  WEEKDAYS,
} from '../constants';
import { Template } from '../types';
import { RelativeDayTemplate } from './relative-day-template';
import { RelativeTimeTemplate } from './relative-time-template';
import { RelativeWeekdayTemplate } from './relative-weekday-template';
import { SimplePattern } from './simple-pattern';

export class TemplateFactory {
  static createRelativeTimeTemplate(): Template {
    return new RelativeTimeTemplate(
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
}
