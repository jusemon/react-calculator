import React from 'react';

type KeyProp = {
  value: string | number;
  span?: number;
  onPressed: () => void;
}

export default function Key({ value, onPressed, span = 1 }: KeyProp) {
  return (
    <button className={`key span-${span}`} onClick={onPressed}>
      {value}
    </button>
  );
}
