import React from 'react';

import useCounter from './components/hooks/useCounter';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
import { incrementByOne } from './components/functions/functionsList';

import './App.css';

function App() {
  const [ballCounter, setBallCounter] = useCounter('ball');
  const [strikeCounter, setStrikeCounter] = useCounter('strike');
  const [outCounter, setOutCounter] = useCounter('outs');
  const [hitCounter, setHitCounter] = useCounter('hits');
  const [team, setTeam] = useCounter('team');
  const [scoreZero, setScoreZero] = useCounter('scoreZero');
  const [scoreOne, setScoreOne] = useCounter('scoreOne');

  const resetAll = () => {
    setBallCounter(0);
    setStrikeCounter(0);
    setOutCounter(0);
    setTeam(0);
    setScoreZero(0);
    setScoreOne(0);
    setHitCounter(0)
  }

  const resetPoints = () => {
    setBallCounter(0);
    setStrikeCounter(0);
    if (outCounter < 2) {
      setOutCounter(incrementByOne(outCounter));
    }
    else {
      setOutCounter(0);
      team === 0 ? setTeam(1) : setTeam(0);
    }
  }

  const score = () => {
    setBallCounter(0);
    setStrikeCounter(0);
    setHitCounter(0);
    if (team === 0) {
      setScoreZero(incrementByOne(scoreZero));
    }
    else {
      setScoreOne(incrementByOne(scoreOne));
    }
  }

  const incrementPoints = (type) => {
    //ball logic
    if (type === 'ball') {
      if (ballCounter === 3) {
        resetPoints();
      }
      else {
        setBallCounter(incrementByOne(ballCounter));
      }
    }
    //strike logic
    else if (type === 'strike') {
      if (strikeCounter === 2) {
        resetPoints();
      }
      else {
        setStrikeCounter(incrementByOne(strikeCounter));
      }
    }
    //foul logic
    else if (type === 'foul') {
      if (strikeCounter < 2) {
        setStrikeCounter(incrementByOne(strikeCounter));
      }
    }
    //hit logic
    else if (type === 'hit') {
      if (hitCounter === 3) {
        score();
      }
      else {
        setHitCounter(incrementByOne(hitCounter));
      }
    }
    else {
      alert('Error: Input Unrecognized: App.js: incrementPoints Function');
    }
  }

  return (
    <div className="App" >
      <Display
        ballCounter={ballCounter}
        strikeCounter={strikeCounter}
        outCounter={outCounter}
        team={team}
        scoreZero={scoreZero}
        scoreOne={scoreOne}
        hitCounter={hitCounter}
      />
      <Dashboard incrementPoints={incrementPoints} resetAll={resetAll} />
    </div >
  );
}

export default App;
