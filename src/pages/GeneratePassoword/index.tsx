import React from 'react';
import { GeneratePasswordForm } from './GeneratePasswordForm';

export function GeneratePassword() {
  return (
    <div className="container py-20 text-black dark:text-lightgray">
      <div className="flex flex-col items-center mb-16">
        <h1 className="mb-8 text-4xl font-semibold ">랜덤 비밀번호 생성기</h1>
        <p className="max-w-screen-sm text-lg text-center font-normal">
          안전하게 랜덤 비밀번호를 생성하여 해킹을 막으세요.{' '}
          <strong>모든 비밀번호는 절대로 인터넷으로 전송되지 않습니다.</strong>
        </p>
      </div>
      <GeneratePasswordForm />
    </div>
  );
}
