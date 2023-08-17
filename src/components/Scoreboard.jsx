import { useState } from 'react';

function Scoreboard({score, best}) {
    return (
      <>
        <div>BestScore: {best}</div>
        Current Score: {score}
      </>
    )
}
  
export default Scoreboard