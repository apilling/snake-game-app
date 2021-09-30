import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoserModal } from './components/loserModal';
import { SnakeBoard } from './components/snakeBoard';

function App() {

  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="App">
      <h1 className='title'><strong>Snake</strong></h1>
      <SnakeBoard showLoserModal={setVisible}></SnakeBoard>
      <LoserModal visible={visible} setVisible={setVisible}></LoserModal>
    </div>
  );
}

export default App;
