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

  return (
    <div className="App">
      <h1>Baseball Dashboard</h1>
      <h3>Ball: {ballCounter}</h3>
      <h3>Strike: {strikeCounter}</h3>
    </div>
  );
}

export default App;
