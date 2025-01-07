import { Rule } from './src/types';

export function validateInput(rules: Rule[], input: string, context: any = {}): boolean {
  const inputParts = input.split(' ');

  if (inputParts.length > rules.length) {
    return false;
  }

  for (let i = 0; i < inputParts.length; i++) {
    const rule = rules[i];
    const inputPart = inputParts[i] as string;

    if (i > 0) {
      context.previousWord = inputParts[i - 1];
    }

    // Enum validation
    if (rule?.values && !rule.values.some((value) => value.startsWith(inputPart))) {
      return false;
    }

    // Custom validator
    if (rule?.validator && !rule.validator(inputPart, context)) {
      return false;
    }

    // Update context for subsequent rules
    if (rule?.type === 'Number') {
      context.previousNumber = inputPart;
    }
  }

  return true;
}
