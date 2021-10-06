import React from 'react';
import { Password } from './Password';
import { Options } from './Options';
import { GeneratePasswordProvider } from '../../contexts/GeneratePasswordContext';

export const GeneratePasswordForm = () => {
  return (
    <GeneratePasswordProvider>
      <div className="w-full">
        <Password />
        <Options />
      </div>
    </GeneratePasswordProvider>
  );
};
