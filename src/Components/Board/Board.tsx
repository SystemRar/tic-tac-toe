import { useMemo } from 'react';

import calculateWinner from '../../scripts/calculateWinner';
import Square from '../Square/Square';
import boardStyles from './Board.module.css';

type BoardPropsType = {
  xIsNext: boolean;
  squares: Array<string>;
  onPlay: (nextSquares: Array<string>) => void;
};

function Board({ xIsNext, squares, onPlay }: BoardPropsType) {
  const winner = useMemo(() => calculateWinner(squares), [squares]);

  function handleClick(index: number) {
    if (squares[index] || winner) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[index] = xIsNext ? 'X' : 'O';

    onPlay(nextSquares);
  }

  const status = useMemo(() => {
    if (winner) {
      return `Winner: ${winner}`;
    }
    return `Next player: ${xIsNext ? 'X' : 'O'}`;
  }, [winner, xIsNext]);

  return (
        <div className="game-board">
            <div className={boardStyles.status}><p>{status}</p></div>
            <div className={boardStyles.boardRow}>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className={boardStyles.boardRow}>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className={boardStyles.boardRow}>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </div>
  );
}

export default Board;
