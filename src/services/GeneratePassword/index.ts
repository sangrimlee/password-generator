const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const DIGIT = '0123456789';
const SPECIAL = '~!@#$%^&*+=|()[]{}:;-_-';
const AMBIGUOUS = 'lI1|';

export interface IGeneratePasswordOptions {
  length: number;
  isUpperCase: boolean;
  isLowerCase: boolean;
  isDigit: boolean;
  isSpecial: boolean;
}

export const DEFAULT_GENERATE_PASSWORD_OPTIONS: IGeneratePasswordOptions = {
  length: 16,
  isUpperCase: true,
  isLowerCase: true,
  isDigit: true,
  isSpecial: true,
};

export function generatePassword({
  length,
  isUpperCase,
  isLowerCase,
  isDigit,
  isSpecial,
}: IGeneratePasswordOptions) {
  let characters = '';
  if (isUpperCase) characters += UPPERCASE;
  if (isLowerCase) characters += LOWERCASE;
  if (isDigit) characters += DIGIT;
  if (isSpecial) characters += SPECIAL;
  const arr = new Uint8Array(length ?? 10);
  const charIndexes = window.crypto
    .getRandomValues(arr)
    .map((value) => value % characters.length);
  let password = '';
  for (let i = 0; i < arr.length; i++) {
    password += characters[charIndexes[i]];
  }
  return password;
}
