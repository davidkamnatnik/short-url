import React, { useState } from 'react';

const InputShort = ({setInputValue}) => {
  const [value, setValue] = useState('');
  const handleClick = () => {
    setInputValue(value);
    setValue('');
  }

  return (
    <div className='inputWrapper'>
      <h1>
        URL <span>SHORTENER</span>
      </h1>
      <div>
        <input type='text' 
        placeholder='Paste in a link' 
        value={value}
        onChange={e => setValue(e.target.value)}
        />
        <button onClick={handleClick}>SHORTEN</button>
      </div>
    </div>
  );
};

export default InputShort;
