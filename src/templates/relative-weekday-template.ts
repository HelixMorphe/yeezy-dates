import { BaseTemplate } from './base-template';

export class RelativeWeekdayTemplate extends BaseTemplate {
  format(values: string[]): string {
    const [relative, weekday] = values;
    return `${relative} ${weekday}`;
  }
}
