import React, { useCallback, useEffect } from 'react';

type KeyProp = {
  text: string;
  keyEvent: string;
  span?: number;
  onPressed: () => void;
}

export default function Key({ text, keyEvent, onPressed, span = 1 }: KeyProp) {
  const action = useCallback((e: globalThis.KeyboardEvent) => {
    if (e.key === keyEvent) {
      console.log('keyEvent', keyEvent);
      onPressed();
    }
  }, [keyEvent, onPressed]);

  useEffect(() => {
    window.addEventListener('keydown', action, false);
    return () =>  window.removeEventListener('keydown', action, false);
  }, [action]);

  return (
    <button className={`key span-${span}`} onClick={onPressed}>
      {text}
    </button>
  );
}
