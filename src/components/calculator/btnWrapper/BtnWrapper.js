import React from 'react';
import './BtnWrapper.css'

export default function BtnWrapper({arrNums, multiplayFunc, resetFunc}) {
  return (
      <div className='btn-wrapper'>
        {arrNums.map(value => <button key={value} onClick={() => multiplayFunc(value)} className='btn'>{value}</button>)}
        <button onClick={resetFunc} className='btn'>Reset</button>
      </div>
  );
}