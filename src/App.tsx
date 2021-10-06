import React from 'react';
import { DarkModeButton } from './components/Button/DarkModeButton';
import { ThemeProvider } from './contexts/ThemeContext';
import { GeneratePassword } from './pages/GeneratePassoword';

function App() {
  return (
    <ThemeProvider>
      <GeneratePassword />
      <DarkModeButton />
    </ThemeProvider>
  );
}

export default App;
