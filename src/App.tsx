import React from 'react';
import './App.css';
import { TranslationServiceProvider } from './UtilitiesServiceContext';
import WordBook from './WordBook';

function App() {
  return (
    <TranslationServiceProvider>
      <table>
        <thead>
          <tr><td>Word</td><td>Translation</td><td></td></tr>
        </thead>
        <WordBook />
      </table>
    </TranslationServiceProvider>
  );
}

export default App;
