import React from 'react'; // Sikre at React er importeret
import Header from './header';
import './index.css';

function App() {
  return (
    <div>
      <Header />
      <main>
        <h1>Velkommen til Fyrrehaven!</h1>
        <p>Dette er en simpel React-applikation.</p>
      </main>
    </div>
  );
}

export default App;

