import React from 'react';
import { Checkbox } from '../Input/Checkbox';
import { Range } from '../Input/Range';
import { useGeneratePasswordContext } from '../../contexts/GeneratePasswordContext';

export const GenerateOptions = () => {
  const { options, setOptions } = useGeneratePasswordContext();
  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div>
        <h5 className="font-semibold">문자 유형</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 py-4">
          <div>
            <Checkbox
              id="uppercase"
              label="A-Z (대문자)"
              checked={options.isUpperCase}
              onClick={() => {
                setOptions({
                  ...options,
                  isUpperCase: !options.isUpperCase,
                });
              }}
              disabled={
                options.isUpperCase &&
                !(options.isLowerCase || options.isDigit || options.isSpecial)
              }
            />
          </div>
          <div>
            <Checkbox
              id="lower"
              label="a-z (대문자)"
              checked={options.isLowerCase}
              onClick={() => {
                setOptions({
                  ...options,
                  isLowerCase: !options.isLowerCase,
                });
              }}
              disabled={
                options.isLowerCase &&
                !(options.isUpperCase || options.isDigit || options.isSpecial)
              }
            />
          </div>
          <div>
            <Checkbox
              id="digit"
              label="0-9 (숫자)"
              checked={options.isDigit}
              onClick={() => {
                setOptions({
                  ...options,
                  isDigit: !options.isDigit,
                });
              }}
              disabled={
                options.isDigit &&
                !(
                  options.isLowerCase ||
                  options.isUpperCase ||
                  options.isSpecial
                )
              }
            />
          </div>
          <div>
            <Checkbox
              id="special"
              label="!@#$%^등 (특수문자)"
              checked={options.isSpecial}
              onClick={() => {
                setOptions({
                  ...options,
                  isSpecial: !options.isSpecial,
                });
              }}
              disabled={
                options.isSpecial &&
                !(options.isLowerCase || options.isDigit || options.isUpperCase)
              }
            />
          </div>
          <div className="">
            <Checkbox
              id="ambigious"
              label="애매한 문자 피하기 (예: 1,I,l)"
              checked={options.removeAmbiguous}
              onClick={() => {
                setOptions({
                  ...options,
                  removeAmbiguous: !options.removeAmbiguous,
                });
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <h5 className="font-semibold">비밀번호 길이</h5>
        <Range
          value={options.length}
          min="6"
          max="50"
          onChange={(event) =>
            setOptions({
              ...options,
              length: parseInt(event.currentTarget.value),
            })
          }
        />
      </div>
    </div>
  );
};
