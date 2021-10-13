import React from 'react';
import logo from '../../assets/img/logo.png';

export const Header = () => {
  return (
    <header className="sticky z-50 top-0 w-full border-b border-lightgray dark:border-black">
      <div className="container py-2 bg-white dark:bg-darkgray text-black dark:text-white">
        <div className="flex items-center justify-between">
          <img src={logo} alt="로고" className="w-8 h-8" />
        </div>
      </div>
    </header>
  );
};
