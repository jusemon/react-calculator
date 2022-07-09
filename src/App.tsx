import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import Display from './components/Display';
import Keyboard from './components/Keyboard';

const FORMULA_ERROR = 'Invalid formula';

function App() {
  const [year] = useState(new Date().getFullYear());
  const [formula, setFormula] = useState('');
  const [result, setResult] = useState('');
  const [mustClear, setMustClear] = useState(false);

  const clearHandler = () => {
    setFormula('');
    setResult('');
  };

  const mustClearHandler = (result = '', key: string | number = '') => {
    setFormula(`${result}${key}`);
    if (result === FORMULA_ERROR) {
      setFormula(`${key}`)
      setResult('');
    }
    setMustClear(false);
  };

  const changeHandler = (key: string | number) => {
    if (mustClear) {
      mustClearHandler(result, key);
      return;
    }
    setFormula(`${formula}${key}`);
  };

  const calculateHandler = () => {
    if (mustClear) {
      mustClearHandler();
      return;
    }
    setFormula(formula);
    try {
      const value = evaluate(formula);
      if (typeof value === 'undefined') {
        throw new Error(FORMULA_ERROR);
      }
      setResult(`${value}`.trim());
    } catch (error) {
      setResult(FORMULA_ERROR);
    }
    setMustClear(true);
  };

  return (
    <div className='app'>
      <div className='app-body'>
        <header className='app-title'>
          <h2>Calculator</h2>
        </header>
        <main className='app-main'>
          <Display formula={formula} result={result} />
          <Keyboard clearHandler={clearHandler} changeHandler={changeHandler} calculateHandler={calculateHandler} />
        </main>
      </div>
      <footer className='app-footer'>
        <small>&copy; {year} Juan Sebastián Montoya. All Rights Reserved</small>
      </footer>
    </div>
  );
}

export default App;
