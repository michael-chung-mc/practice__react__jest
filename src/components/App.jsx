import { useState } from 'react';
import Scoreboard from './Scoreboard.jsx';
import Card from './Card.jsx';

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  function handleScore() {
    setScore(score+1);
    setBestScore(Math.max(bestScore,score));
  }
  return (
    <>
    {<Scoreboard score={score} best={bestScore}/>}
    <button onClick={handleScore}>Score</button>
    </>
  )
}

export default App