import React from 'react';

import useCounter from './components/hooks/useCounter';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

import './App.css';

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
    <div className="App" >
      <Display ballCounter={ballCounter} strikeCounter={strikeCounter} />
      <Dashboard incrementPoints={incrementPoints} />
    </div >
  );
}

export default App;
