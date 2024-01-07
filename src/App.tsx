import { useCallback, useState } from 'react';

import appStyles from './App.module.css';
import Board from './Components/Board/Board';
import Moves from './Components/Moves/Moves';

export default function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  const handlePlay = useCallback((nextSquares: Array<string>) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }, [history, currentMove]);

  return (
        <div className={appStyles.game}>
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
            <Moves setCurrentMove={setCurrentMove} history={history}/>
        </div>
  );
}
