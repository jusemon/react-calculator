import React from 'react';

type KeyProp = {
  value: string | number;
  span?: number;
  hidden?: boolean;
  className?: string;
  onPressed: () => void;
}

export default function Key({ value, onPressed, span = 1, hidden = false, className = '' }: KeyProp) {
  return (
    <React.Fragment>
      {hidden || <button className={`key span-${span} ${className}`} onClick={onPressed}>
        {value}
      </button>}
    </React.Fragment>
  );
}
