import React, { useState, useEffect } from 'react';
import { Button } from '../../components/Button/Button';
import { copyToClipboard } from '../../services/CopyToClipboard';
import { useGeneratePasswordContext } from '../../contexts/GeneratePasswordContext';
import { generatePassword } from '../../services/GeneratePassword';
import { ReactComponent as Copy } from '../../assets/svg/copy.svg';
import { PasswordSafety } from './PasswordSafety';

export const Password = () => {
  const [password, setPassword] = useState<string>('');
  const { options } = useGeneratePasswordContext();
  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  useEffect(() => {
    setPassword(generatePassword(options));
  }, [options]);

  return (
    <>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="md:col-span-3 text-darkgray dark:text-gray">
          <div className="flex items-center justify-between p-5 rounded-xl bg-lightgray dark:bg-black">
            <input
              className="flex-1 bg-transparent focus:outline-none"
              placeholder="비밀번호를 생성하세요."
              type="text"
              value={password}
              onChange={onChangePassword}
            />
            <div className="flex">
              <PasswordSafety />
              <button onClick={() => copyToClipboard(password)}>
                <Copy className="fill-current" />
              </button>
            </div>
          </div>
        </div>
        <div className="md:col-span-1">
          <Button
            className="w-full py-5 px-5"
            text="재생성"
            onClick={() => setPassword(generatePassword(options))}
          />
        </div>
      </div>
    </>
  );
};
