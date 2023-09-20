import './App.css';
import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (value) => {
    setInputValue(inputValue + value);
    setDisplayValue(convertToUrdu(inputValue + value));
  };

  const handleClear = () => {
    setInputValue('');
    setDisplayValue('');
  };

  const handleDelete = () => {
    setInputValue(inputValue.slice(0, -1));
    setDisplayValue(convertToUrdu(inputValue.slice(0, -1)));
  };

  const handleEqual = () => {
    try {
      const result = eval(convertToEnglish(inputValue));
      setInputValue(result.toString());
      setDisplayValue(convertToUrdu(result.toString()));
    } catch (error) {
      setInputValue('Error');
      setDisplayValue('خرابی');
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={displayValue} readOnly />
          </div>
          <div>
            <input type="button" value="AC" onClick={handleClear} />
            <input type="button" value="DE" onClick={handleDelete} />
            <input type="button" value="." onClick={() => handleButtonClick('.')} />
            <input type="button" value="/" onClick={() => handleButtonClick('/')} />
          </div>
          <div>
            <input type="button" value="۷" onClick={() => handleButtonClick('7')} />
            <input type="button" value="۸" onClick={() => handleButtonClick('8')} />
            <input type="button" value="۹" onClick={() => handleButtonClick('9')} />
            <input type="button" value="*" onClick={() => handleButtonClick('*')} />
          </div>
          <div>
            <input type="button" value="۴" onClick={() => handleButtonClick('4')} />
            <input type="button" value="۵" onClick={() => handleButtonClick('5')} />
            <input type="button" value="۶" onClick={() => handleButtonClick('6')} />
            <input type="button" value="+" onClick={() => handleButtonClick('+')} />
          </div>
          <div>
            <input type="button" value="۱" onClick={() => handleButtonClick('1')} />
            <input type="button" value="۲" onClick={() => handleButtonClick('2')} />
            <input type="button" value="۳" onClick={() => handleButtonClick('3')} />
            <input type="button" value="-" onClick={() => handleButtonClick('-')} />
          </div>
          <div>
            <input type="button" value="۰" onClick={() => handleButtonClick('0')} />
            <input type="button" value="۰۰" onClick={() => handleButtonClick('00')} />
            <input type="button" value="=" className="equal" onClick={handleEqual} />
          </div>
        </form>
      </div>
    </div>
  );
}

function convertToUrdu(value) {
  return value.replace(/[0-9]/g, (w) => String.fromCharCode(0x0660 + parseInt(w, 10)));
}

function convertToEnglish(value) {
  return value.replace(/[۰-۹]/g, (w) => String.fromCharCode(0x0030 + parseInt(w, 10)));
}

export default App;
