import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoserModal } from './components/loserModal';
import { score, SnakeBoard } from './components/snakeBoard';
import { CurrentScore } from './components/score';
import { DifficultyButtons } from './components/difficultyButtons';

function App() {

  const [visible, setVisible] = useState<boolean>(false);
  const [playerScore, setPlayerScore] = useState<number>(score);
  const [difficulty, setDifficulty] = useState<number>(100);

  return (
    <div className="App">
      <h1 className='title'><strong>Snake</strong></h1>
      <SnakeBoard showLoserModal={setVisible} updateScore={setPlayerScore} speed={difficulty} setSpeed={setDifficulty}></SnakeBoard>
      <CurrentScore playerScore={score} setPlayerScore={setPlayerScore}></CurrentScore>
      <LoserModal visible={visible} setVisible={setVisible}></LoserModal>
      <h2 className='difficulty'>Set Your Difficulty</h2>
      <DifficultyButtons difficulty={difficulty} setDifficulty={setDifficulty}></DifficultyButtons>
    </div>
  );
}

export default App;
