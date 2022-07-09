import React, { useState } from 'react';
import Display from './components/Display';
import Keyboard from './components/Keyboard';

function App() {
  const [year] = useState(new Date().getFullYear());
  const [displayValue] = useState('');

  const clearHandler = () => { }
  const changeHandler = () => { }

  return (
    <div className='app'>
      <header className='app-title'>
        <h2>Calculator</h2>
      </header>
      <main className='app-main'>
        <Display value={displayValue} />
        <Keyboard clearHandler={clearHandler} changeHandler={changeHandler} />
      </main>
      <footer className='app-footer'>
        <small>&copy; {year} Juan Sebastián Montoya. All Rights Reserved</small>
      </footer>
    </div>
  );
}

export default App;
