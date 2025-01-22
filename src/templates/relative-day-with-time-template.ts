import { BaseTemplate } from './base-template';

export class RelativeDayWithTimeTemplate extends BaseTemplate{
  format(values: string[]): string {
    const [relativeDay, time] = values;
    return `${relativeDay} at ${time}`;
  }
}