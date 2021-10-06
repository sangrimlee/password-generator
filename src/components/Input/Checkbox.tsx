import React from 'react';

interface ICheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

export const Checkbox: React.FC<ICheckboxProps> = ({
  id,
  label,
  ...inputProps
}) => {
  return (
    <div className="flex items-center">
      <input
        className="form-checkbox h-5 w-5 border-0 rounded-sm mr-2 text-blue dark:text-blue bg-lightgray dark:bg-black shadow-inner"
        id={id}
        type="checkbox"
        {...inputProps}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
