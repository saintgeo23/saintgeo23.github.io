import React from 'react';
import Header from './components/Header/Header';
import { ThemeProvider } from '../src/providers/ThemeProvider';
import { LanguageProvider } from '../src/providers/LanguageProvider';
import './App.less';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="App">
          <Header />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
