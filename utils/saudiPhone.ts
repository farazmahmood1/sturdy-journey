
/** Strip everything except digits and a leading '+' */
const stripNonDigits = (value: string): string => value.replace(/[^\d+]/g, '');

/**
 * Normalise any Saudi phone input to the raw 9-digit subscriber number (5XXXXXXXX).
 * Returns null if the number is not a valid Saudi mobile.
 */
export const normaliseSaudiPhone = (phone: string): string | null => {
  const cleaned = stripNonDigits(phone);

  let digits = cleaned.replace(/^\+/, '');

  // Remove international prefix variants
  if (digits.startsWith('00971')) {
    digits = digits.slice(5);
  } else if (digits.startsWith('971')) {
    digits = digits.slice(3);
  } else if (digits.startsWith('0')) {
    digits = digits.slice(1);
  }

  // At this point we should have 9 digits starting with 5
  if (/^5\d{8}$/.test(digits)) {
    return digits;
  }

  return null;
};

/**
 * Validate that a string is a valid Saudi mobile number.
 */
export const isValidSaudiPhone = (phone: string): boolean => {
  return normaliseSaudiPhone(phone) !== null;
};

/**
 * Format a Saudi phone number for display: +971 5X XXX XXXX
 */
export const formatSaudiPhone = (phone: string): string => {
  const subscriber = normaliseSaudiPhone(phone);
  if (!subscriber) return phone; // return as-is if not valid Saudi

  // +971 5X XXX XXXX
  return `+971 ${subscriber.slice(0, 2)} ${subscriber.slice(2, 5)} ${subscriber.slice(5)}`;
};

/**
 * Format any phone number for display (auto-detect Saudi vs other).
 * For non-Saudi numbers, applies a generic grouping.
 */
export const formatPhoneDisplay = (phone: string): string => {
  const subscriber = normaliseSaudiPhone(phone);
  if (subscriber) {
    return `+971 ${subscriber.slice(0, 2)} ${subscriber.slice(2, 5)} ${subscriber.slice(5)}`;
  }

  // Generic international formatting for non-Saudi numbers (e.g. UAE +971)
  const cleaned = phone.replace(/[^\d+]/g, '');
  if (cleaned.startsWith('+')) {
    const digits = cleaned.slice(1);
    // +XXX XX XXX XXXX pattern
    if (digits.length >= 10) {
      const cc = digits.slice(0, 3);
      const rest = digits.slice(3);
      return `+${cc} ${rest.slice(0, 2)} ${rest.slice(2, 5)} ${rest.slice(5)}`;
    }
  }

  return phone;
};

/**
 * Handle phone input: auto-format into Saudi international format +971 5X XXX XXXX.
 * Always normalises toward the Saudi format as the user types.
 */
export const handlePhoneInput = (raw: string): string => {
  // Strip everything except digits
  let digits = raw.replace(/\D/g, '');

  if (digits.length === 0) return '';

  // Remove leading international prefixes to get to the subscriber part
  if (digits.startsWith('00971')) {
    digits = digits.slice(5);
  } else if (digits.startsWith('971')) {
    digits = digits.slice(3);
  } else if (digits.startsWith('0')) {
    digits = digits.slice(1);
  }

  // User only typed a leading 0 so far — show the prefix and wait
  if (digits.length === 0) return '+971 ';

  // Clamp to 9 subscriber digits max (5XXXXXXXX)
  digits = digits.slice(0, 9);

  // Build formatted output: +971 5X XXX XXXX
  if (digits.length <= 2) return `+971 ${digits}`;
  if (digits.length <= 5) return `+971 ${digits.slice(0, 2)} ${digits.slice(2)}`;
  return `+971 ${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5)}`;
};
