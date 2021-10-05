import React, { useState } from 'react';
import { GeneratePasswordContext } from '../../contexts/GeneratePasswordContext';
import { Password } from './Password';
import { Options } from './Options';
import {
  DEFAULT_GENERATE_PASSWORD_OPTIONS,
  IGeneratePasswordOptions,
} from '../../services/GeneratePassword';

export const GeneratePasswordForm = () => {
  const [options, setOptions] = useState<IGeneratePasswordOptions>(
    DEFAULT_GENERATE_PASSWORD_OPTIONS,
  );

  return (
    <GeneratePasswordContext.Provider value={{ options, setOptions }}>
      <div className="w-full">
        <Password />
        <Options />
      </div>
    </GeneratePasswordContext.Provider>
  );
};
