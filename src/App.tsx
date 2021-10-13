import React from 'react';
import { DarkModeButton } from './components/Button/DarkModeButton';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { ThemeProvider } from './contexts/ThemeContext';
import { GeneratePassword } from './pages/GeneratePassoword';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <GeneratePassword />
      <Footer />
      <DarkModeButton />
    </ThemeProvider>
  );
}

export default App;
