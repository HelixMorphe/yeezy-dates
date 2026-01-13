import { BaseTemplate } from './base-template';

export class RelativeMonthTemplate extends BaseTemplate {
  format(values: string[]): string {
    const [relativeMonth] = values;
    return relativeMonth;
  }
}
