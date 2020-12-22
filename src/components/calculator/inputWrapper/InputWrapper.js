import React, {useState} from 'react';
import './InputWrapper.css'

export default function InputWrapper({multiplayFunc}) {
  const [inputValue, setValue] = useState('')

  return (
      <div className='input-wrapper'>
        <p><b>Число:</b></p>
        <input onInput={(e) => setValue(parseInt(e.currentTarget.value))} className='input'/>
        <button onClick={() => multiplayFunc(inputValue)} className='btn'>Submit</button>
      </div>
  );
}