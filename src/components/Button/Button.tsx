import React from 'react';

interface IButtonProps extends React.DOMAttributes<HTMLButtonElement> {
  className?: string;
  text: string;
}

export const Button: React.FC<IButtonProps> = ({
  className,
  text,
  onClick,
}) => {
  return (
    <button
      className={`btn animation translate-y-0 hover:shadow-blue hover:-translate-y-0.5 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
