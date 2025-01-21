import { TIME_UNITS } from '../constants';
import { Template } from '../types';
import { RelativeTimeTemplate } from './relative-time-template';
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
}
