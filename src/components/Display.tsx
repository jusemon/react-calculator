import React from 'react';

type DisplayProp = {
  value: string;
}

export default function Display({ value }: DisplayProp) {
  return (
    <div className='display'>
      {value}
    </div>
  );
}
