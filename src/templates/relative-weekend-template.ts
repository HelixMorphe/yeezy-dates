import { BaseTemplate } from './base-template';

export class RelativeWeekendTemplate extends BaseTemplate {
  format(values: string[]): string {
    const [relativeWeekend] = values;
    const prefix = relativeWeekend.replace(' weekend', '');
    return `${prefix} saturday`;
  }
}
