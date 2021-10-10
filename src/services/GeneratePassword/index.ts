const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const DIGIT = '0123456789';
const SPECIAL = '~!@#$%^&*+=|()[]{}:;-_-';
const AMBIGUOUS = /i|l|I|1|\||0|o|O|2|Z|z/g;

export interface IGeneratePasswordOptions {
  length: number;
  isUpperCase: boolean;
  isLowerCase: boolean;
  isDigit: boolean;
  isSpecial: boolean;
  removeAmbiguous: boolean;
}

export const DEFAULT_GENERATE_PASSWORD_OPTIONS: IGeneratePasswordOptions = {
  length: 16,
  isUpperCase: true,
  isLowerCase: true,
  isDigit: true,
  isSpecial: true,
  removeAmbiguous: false,
};

export function generatePassword({
  length,
  isUpperCase,
  isLowerCase,
  isDigit,
  isSpecial,
  removeAmbiguous,
}: IGeneratePasswordOptions) {
  let characters = '';
  if (isUpperCase) characters += UPPERCASE;
  if (isLowerCase) characters += LOWERCASE;
  if (isDigit) characters += DIGIT;
  if (isSpecial) characters += SPECIAL;
  if (removeAmbiguous) characters = characters.replace(AMBIGUOUS, '');
  const password = Array.from(
    window.crypto.getRandomValues(new Uint32Array(length)),
  )
    .map((value) => characters[value % characters.length])
    .join('');
  return password;
}
