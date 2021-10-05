import React from 'react';
import { GeneratePasswordForm } from './GeneratePasswordForm';

export function GeneratePassword() {
  return (
    <div className="container bg-white py-20">
      <div className="flex flex-col items-center mb-16">
        <h1 className="mb-8 text-4xl font-semibold">랜덤 비밀번호 생성기</h1>
        <p className="max-w-screen-sm text-lg text-center font-normal text-darkgray">
          안전한 랜덤 비밀번호를 생성하세요.{' '}
          <strong>
            모든 비밀번호는 고객님의 장치에서 안전하게 생성되며 절대로
            인터넷으로 전송되지 않습니다.
          </strong>
        </p>
      </div>
      <GeneratePasswordForm />
    </div>
  );
}
