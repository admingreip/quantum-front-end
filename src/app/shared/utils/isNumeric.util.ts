
import { UtlIsArray } from './isArray.util';

export function UtlIsNumeric(val: any): val is number {
  // parseFloat NaNs numeric-cast false positives (null|true|false|"")
  // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
  // subtraction forces infinities to NaN
  // adding 1 corrects loss of precision from parseFloat (#15100)
  return !UtlIsArray(val) && (val - parseFloat(val) + 1) >= 0;
};