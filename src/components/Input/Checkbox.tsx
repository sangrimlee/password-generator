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
        className="form-checkbox h-5 w-5 border-lightgray rounded-sm text-blue mr-2 shadow-inner focus:ring-blue"
        id={id}
        type="checkbox"
        {...inputProps}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
