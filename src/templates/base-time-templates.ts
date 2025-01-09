import { validateInput } from '../../utils';
import {
  Rule,
  RuleType,
  Template,
} from '../types';

const rules: Rule[] = [
  {
    type: RuleType.Enum,
    values: ['today', 'tomorrow', 'yesterday'],
  },
];

export const BaseTimeTemplates: Template = {
  isMatching: function (input: string): boolean {
    return validateInput(rules, input.trim());
  },
  getMatchingValues: function (input: string): string[] {
    return getMatchingEnumValues(rules, input);
  },
};

function getMatchingEnumValues(rules: Rule[], input: string): string[] {
  const enumValues = rules[0]?.values as string[];

  return enumValues.filter((value) => value.startsWith(input.trim().toLowerCase()));
}
