import React, { useState } from 'react';
import './App.css';

function App() {
  console.log(useState(0));
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);

  const handleClick = () => {
    if (strike === 3 || ball === 4 ) {
      setStrike(0)
    } else {
      setStrike(strike + 1)
    }
  };

  return (
    <div className="App">
      <div className='Display'>
        <div className='strike-board'>
          <h2>Strikes</h2>
          <div className='strikes'>{strike}</div>
        </div>
        <div className='ball-board'>
          <h2>Ball</h2>
          <div className='balls'>{ball}</div>
        </div>
      </div>

      <div className='Dashboard'>
        <button onClick={handleClick}>Strike</button>
        <button onClick={() => setBall(ball + 1)}>Ball</button>
      </div>

    </div>
  );
}

export default App;
