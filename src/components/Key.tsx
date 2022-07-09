import React from 'react';

type KeyProp = {
  value: string | number;
  columnSpan?: number;
  rowSpan?: number;
  hidden?: boolean;
  className?: string;
  onPressed: () => void;
}

export default function Key({ value, onPressed, columnSpan = 1, rowSpan = 1, hidden = false, className = '' }: KeyProp) {
  return (
    <React.Fragment>
      {hidden || <button className={`key column-span-${columnSpan} row-span-${rowSpan} ${className}`} onClick={onPressed}>
        {value}
      </button>}
    </React.Fragment>
  );
}
