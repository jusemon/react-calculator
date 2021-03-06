import React, { useCallback, useEffect, useState } from 'react';
import Key from './Key';
import layout from '../config/layout.json';

export interface KeyItem {
  value: string | number;
  keyEvent: string;
  columnSpan?: number;
  rowSpan?: number;
  hidden?: boolean;
  className?: string;
}

type KeyboardProp = {
  changeHandler: (value: string | number) => void;
  clearHandler: () => void;
  calculateHandler: () => void;
  deleteHandler: () => void;
}

export default function Keyboard({ changeHandler, clearHandler, calculateHandler, deleteHandler }: KeyboardProp) {
  const [keys] = useState<Array<KeyItem>>(layout.keys);

  const pressKeyHandler = useCallback((keyEvent: string, keyValue: string | number) => () => {
    if (keyEvent === 'Enter') {
      calculateHandler();
    } else if (keyEvent === 'Escape') {
      clearHandler();
    } else if (keyEvent === 'Backspace') {
      deleteHandler();
    } else {
      changeHandler(keyValue);
    }
  }, [clearHandler, changeHandler, calculateHandler, deleteHandler]);

  useEffect(() => {
    const actions = (e: globalThis.KeyboardEvent) => keys.map(({ keyEvent, value }) =>
      e.key === keyEvent && pressKeyHandler(keyEvent, value)()
    );
    window.addEventListener('keydown', actions, false);
    return () => window.removeEventListener('keydown', actions, false);
  }, [keys, pressKeyHandler]);


  return (
    <div className='keyboard'>
      {keys.map((key, i) =>
        <Key key={i} {...key} onPressed={pressKeyHandler(key.keyEvent, key.value)} />
      )}
    </div>
  );
}
