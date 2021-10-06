import React, { createContext, useContext, useState } from 'react';
import {
  DEFAULT_GENERATE_PASSWORD_OPTIONS,
  IGeneratePasswordOptions,
} from '../../services/GeneratePassword';

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

export const GeneratePasswordProvider: React.FC<React.ReactNode> = ({
  children,
}) => {
  const [options, setOptions] = useState<IGeneratePasswordOptions>(
    DEFAULT_GENERATE_PASSWORD_OPTIONS,
  );
  return (
    <GeneratePasswordContext.Provider value={{ options, setOptions }}>
      {children}
    </GeneratePasswordContext.Provider>
  );
};
