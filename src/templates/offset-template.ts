import { validateInput } from '../../utils';
import {
  Rule,
  RuleType,
  Template,
} from '../types';

const TimeUnits = {
  singular: ['minute', 'hour', 'day', 'week', 'month', 'year'],
  plural: ['minutes', 'hours', 'days', 'weeks', 'months', 'years'],
};

const NumberRule: Rule = {
  type: RuleType.Number,
  validator: (input) => {
    return /^\d+$/.test(input);
  },
};

const rules: Rule[] = [
  NumberRule,
  {
    type: RuleType.Enum,
    validator: (input, context) => {
      const number = parseInt(context.previousNumber || '0', 10);
      if (isNaN(number)) return false;
      if (context.previousNumber === '1') {
        return TimeUnits.singular.some((value) => value.startsWith(input));
      } else {
        return TimeUnits.plural.some((value) => value.startsWith(input));
      }
    },
  },
  {
    type: RuleType.Enum,
    values: ['from', 'ago'],
  },
  {
    type: RuleType.Enum,
    values: ['now'],
    validator: (input, context) => {
      return context.previousWord === 'from' && ['now'].some((value) => value.startsWith(input));
    },
  },
];

export const OffsetTemplate: Template = {
  isMatching: function (input: string): boolean {
    return validateInput(rules, input);
  },
  getMatchingValues: function (input: string): unknown {
    throw new Error('Function not implemented.');
  },
};
