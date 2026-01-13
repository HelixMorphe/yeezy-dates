import { BaseTemplate } from './base-template';

export class RelativeWeekTemplate extends BaseTemplate {
  format(values: string[]): string {
    const [relativeWeek] = values;
    return relativeWeek;
  }
}
