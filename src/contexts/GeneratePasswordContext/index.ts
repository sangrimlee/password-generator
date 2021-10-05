import React, { createContext, useContext } from 'react';
import { IGeneratePasswordOptions } from '../../services/GeneratePassword';

export interface IGeneratePasswordContext {
  options: IGeneratePasswordOptions;
  setOptions: (options: IGeneratePasswordOptions) => void;
}

export const GeneratePasswordContext = createContext<IGeneratePasswordContext>({
  options: {
    length: 16,
    isUpperCase: true,
    isLowerCase: true,
    isDigit: true,
    isSpecial: true,
  },
  setOptions: () => {},
});

export const useGeneratePasswordContext = () =>
  useContext(GeneratePasswordContext);
