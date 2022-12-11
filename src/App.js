import { useState } from 'react';
import './App.css';
import InputShort from './InputShort';
import LinkResult from './LinkResult';

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="layer">
      <InputShort  setInputValue={setInputValue} />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
