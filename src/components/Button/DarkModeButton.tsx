import React from 'react';
import { useThemeContext } from '../../contexts/ThemeContext';
import { ReactComponent as Sunny } from '../../assets/svg/sunny.svg';
import { ReactComponent as Moon } from '../../assets/svg/moon.svg';

export const DarkModeButton = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <div className="fixed right-0 bottom-0 px-4 pt-2 pb-1 z-50 rounded-tl-2xl bg-white dark:bg-darkgray md:bg-transparent">
      <button
        className="text-gray hover:text-yellow dark:text-white dark:hover:text-yellow"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        <div className="w-14 h-8 flex items-center rounded-full  bg-lightgray dark:bg-black px-1">
          <div
            className={`w-6 h-6 z-10 rounded-full bg-white dark:bg-darkgray shadow-md animation ${
              theme === 'light' ? 'translate-x-0' : 'translate-x-6'
            }`}
          />
          <div
            className={`animation ${
              theme === 'light' ? 'translate-x-1' : '-translate-x-5'
            }`}
          >
            {theme === 'light' ? (
              <Moon className="fill-current" width="16" height="16" />
            ) : (
              <Sunny className="fill-current" width="16" height="16" />
            )}
          </div>
        </div>
      </button>
    </div>
  );
};
