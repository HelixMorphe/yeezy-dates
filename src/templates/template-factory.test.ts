import { TIME_UNITS } from '../constants';
import { RelativeTimeTemplate } from './relative-time-template';
import { SimplePattern } from './simple-pattern';
import { TemplateFactory } from './template-factory';

vi.mock('./relative-time-template', () => ({
  RelativeTimeTemplate: vi.fn().mockReturnValue({
    format: vi.fn().mockReturnValue(''),
  }),
}));

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
});
