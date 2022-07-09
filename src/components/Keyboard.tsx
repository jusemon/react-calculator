import React, { useCallback, useState } from 'react';
import { Key as KeyEnum } from 'ts-key-enum'
import Key from './Key';

export interface KeyItem {
  text: string;
  keyEvent: string;
  span?: number;
}

type KeyboardProp = {
  changeHandler: (key: string) => void;
  clearHandler: () => void;
}

export default function Keyboard({ changeHandler, clearHandler }: KeyboardProp) {
  const [keys] = useState<Array<KeyItem>>([
    {
      text: '(',
      keyEvent: '(',
    },
    {
      text: 'C',
      keyEvent: KeyEnum.Escape
    },
    {
      text: ')',
      keyEvent: ')',
    },
    {
      text: '/',
      keyEvent: '/',
    },
    {
      text: '7',
      keyEvent: '7'
    },
    {
      text: '8',
      keyEvent: '8'
    },
    {
      text: '9',
      keyEvent: '9'
    },
    {
      text: '*',
      keyEvent: '*',
    },
    {
      text: '4',
      keyEvent: '4'
    },
    {
      text: '5',
      keyEvent: '5'
    },
    {
      text: '6',
      keyEvent: '6'
    },
    
    {
      text: '-',
      keyEvent: '-',
    },
    {
      text: '1',
      keyEvent: '1'
    },
    {
      text: '2',
      keyEvent: '2'
    },
    {
      text: '3',
      keyEvent: '3'
    },
    {
      text: '+',
      keyEvent: '+',
    },
    {
      text: '0',
      keyEvent: '0',
      span: 2
    },
    {
      text: '.',
      keyEvent: '.'
    },
    {
      text: '=',
      keyEvent: KeyEnum.Enter,
    },
  ]);

  const pressKeyHandler = useCallback((text: string) => () => {
    if (KeyEnum.Escape.toString() === text) {
      clearHandler();
    } else {
      changeHandler(text);
    }
  }, [clearHandler, changeHandler]);

  return (
    <div className='keyboard'>
      {keys.map((key, i) =>
        <Key key={i} {...key} onPressed={pressKeyHandler(key.keyEvent)} />
      )}
    </div>
  );
}
