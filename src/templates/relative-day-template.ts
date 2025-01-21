import { BaseTemplate } from './base-template';

export class RelativeDayTemplate extends BaseTemplate {
  format(values: string[]): string {
    const [relativeDay] = values;
    return `${relativeDay}`;
  }
}