import React, { useState } from 'react';
import './App.css';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const handleValueChange = (newValue) => {
    localStorage.setItem(key, newValue);
    setStoredValue(newValue);
  }

  return [storedValue, handleValueChange];
}

const useCounter = (counterType) => {
  const [counter, setCounter] = useLocalStorage(counterType, 0);

  return [counter, setCounter];
}

function App() {
  const [ballCounter, setBallCounter] = useCounter('ball');
  const [strikeCounter, setStrikeCounter] = useCounter('strike');

  const resetPoints = () => {
    setBallCounter(0);
    setStrikeCounter(0);
  }

  const incrementPoints = (type) => {
    //ball logic
    if (type === 'ball') {
      if (ballCounter === 3) {
        resetPoints();
      }
      else {
        setBallCounter(ballCounter + 1);
      }
    }
    //strike logic
    else if (type === 'strike') {
      if (strikeCounter === 2) {
        resetPoints();
      }
      else {
        setStrikeCounter(strikeCounter + 1);
      }
    }
    //foul logic
    else if (type === 'foul') {
      if (strikeCounter < 2) {
        setStrikeCounter(strikeCounter + 1);
      }
    }
    //hit logic
    else if (type === 'hit') {
      resetPoints();
    }
    else {
      alert('Error: Input Unrecognized: App.js: incrementPoints Function');
    }
  }

  return (
    < div className="App" >
      <h1>Baseball Dashboard</h1>
      <h3>Ball: {ballCounter}</h3>
      <h3>Strike: {strikeCounter}</h3>
      <div className="buttonBar">
        <button onClick={() => incrementPoints('strike')}>Strike</button>
        <button onClick={() => incrementPoints('ball')}>Ball</button>
        <button onClick={() => incrementPoints('foul')}>Foul</button>
        <button onClick={() => incrementPoints('hit')}>Hit</button>
      </div>
    </div >
  );
}

export default App;
