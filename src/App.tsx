import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoserModal } from './components/loserModal';
import { score, SnakeBoard } from './components/snakeBoard';
import { CurrentScore } from './components/score';

function App() {

  const [visible, setVisible] = useState<boolean>(false);
  const [playerScore, setPlayerScore] = useState<number>(score);

  return (
    <div className="App">
      <h1 className='title'><strong>Snake</strong></h1>
      <SnakeBoard showLoserModal={setVisible} updateScore={setPlayerScore}></SnakeBoard>
      <CurrentScore playerScore={score} setPlayerScore={setPlayerScore}></CurrentScore>
      <LoserModal visible={visible} setVisible={setVisible}></LoserModal>
    </div>
  );
}

export default App;
