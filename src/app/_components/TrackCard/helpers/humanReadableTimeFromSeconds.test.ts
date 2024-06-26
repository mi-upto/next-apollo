import { humanReadableTimeFromSeconds } from './humanReadableTimeFromSeconds';
import { describe, it, expect } from '@jest/globals';

describe('humanReadableTimeFromSeconds', () => {
  it('should format seconds less than 60 correctly', () => {
    expect(humanReadableTimeFromSeconds(45)).toBe('45s');
  });

  it('should format minutes correctly', () => {
    expect(humanReadableTimeFromSeconds(120)).toBe('2m');
    expect(humanReadableTimeFromSeconds(360)).toBe('6m');
  });

  it('should format hours and minutes correctly', () => {
    expect(humanReadableTimeFromSeconds(3600)).toBe('1h 0m');
    expect(humanReadableTimeFromSeconds(3660)).toBe('1h 1m');
    expect(humanReadableTimeFromSeconds(7260)).toBe('2h 1m');
  });

  it('should handle edge cases correctly', () => {
    expect(humanReadableTimeFromSeconds(0)).toBe('0s');
    expect(humanReadableTimeFromSeconds(59)).toBe('59s');
    expect(humanReadableTimeFromSeconds(60)).toBe('1m');
    expect(humanReadableTimeFromSeconds(3599)).toBe('59m');
  });
});
