import React, { useEffect, useState } from 'react';
import { useGeneratePasswordContext } from '../../contexts/GeneratePasswordContext';

enum Safety {
  Weak = '취약함',
  Good = '보통',
  Strong = '강력함',
  VeryStrong = '매우 강력함',
}

const checkPasswordSafety = (length: number): Safety => {
  return length < 8
    ? Safety.Weak
    : length < 10
    ? Safety.Good
    : length < 12
    ? Safety.Strong
    : Safety.VeryStrong;
};

export const PasswordSafety = () => {
  const {
    options: { length },
  } = useGeneratePasswordContext();
  const [safety, setSafety] = useState<Safety>(checkPasswordSafety(length));

  useEffect(() => {
    setSafety(checkPasswordSafety(length));
  }, [length]);

  return (
    <div
      className={`flex justify-center items-center rounded px-2 mr-4 text-sm text-white font-medium ${
        safety === Safety.Weak
          ? 'bg-red'
          : safety === Safety.Good
          ? 'bg-yellow'
          : 'bg-blue'
      }`}
    >
      <span>{safety}</span>
    </div>
  );
};
