import React from 'react';

interface IRangeProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string | number | undefined;
}

export const Range: React.FC<IRangeProps> = ({ value, ...inputProps }) => {
  return (
    <div className="flex items-center justify-between py-4">
      <input
        className="appearance-none w-full h-2 mr-4 rounded-full bg-lightgray dark:bg-black"
        type="range"
        defaultValue={value}
        {...inputProps}
      />
      <label>{value}</label>
    </div>
  );
};
