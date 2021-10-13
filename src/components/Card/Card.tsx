import React from 'react';

export const Card: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <div className="bg-white dark:bg-darkgray rounded-2xl shadow-xl animation translate-y-0 hover:shadow-2xl hover:-translate-y-1">
      {children}
    </div>
  );
};
