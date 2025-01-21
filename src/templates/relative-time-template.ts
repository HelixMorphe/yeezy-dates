import { BaseTemplate } from './base-template';

export class RelativeTimeTemplate extends BaseTemplate{
  format(values: string[]): string {
    const [number, unit, direction] = values;
    const formattedUnit = number === '1' ? unit?.replace(/s$/, '') : unit;
    return `${number} ${formattedUnit} ${direction}`;
  }
}