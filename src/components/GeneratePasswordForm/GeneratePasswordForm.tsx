import React from 'react';
import { PasswordInput } from './PasswordInput';
import { GenerateOptions } from './GenerateOptions';
import { GeneratePasswordProvider } from '../../contexts/GeneratePasswordContext';

export const GeneratePasswordForm = () => {
  return (
    <GeneratePasswordProvider>
      <div className="flex flex-col items-center mb-10">
        <h1 className="mb-5 text-4xl font-bold ">랜덤 비밀번호 생성기</h1>
        <p className="text-center font-medium break-words">
          안전하게 랜덤 비밀번호를 생성하여 해킹을 막으세요.{' '}
          <strong>모든 비밀번호는 컴퓨터에 로컬로 생성됩니다.</strong>
        </p>
      </div>
      <div className="w-full grid gap-y-10">
        <PasswordInput />
        <GenerateOptions />
      </div>
    </GeneratePasswordProvider>
  );
};
