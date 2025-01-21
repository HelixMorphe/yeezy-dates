import {
  Pattern,
  PatternValue,
} from '../types';

export class SimplePattern implements Pattern {
  constructor(
    readonly key: string,
    readonly values: PatternValue[],
  ) {}
}
