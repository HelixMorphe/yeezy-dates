import { BaseTemplate } from './base-template';

export class RelativeYearTemplate extends BaseTemplate {
  format(values: string[]): string {
    const [relativeYear] = values;
    return relativeYear;
  }
}
