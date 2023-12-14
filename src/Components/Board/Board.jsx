import './Board.css';

import {useMemo} from "react";

import Square from "../Square/Square.jsx";
import PropTypes from "prop-types";

function Board({ xIsNext, squares, onPlay }) {
    const winner = useMemo(() => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }, [squares]);

    function handleClick(i) {
        if (squares[i] || winner) {
            return;
        }

        const nextSquares = squares.slice();
        xIsNext ? nextSquares[i] = 'X' : nextSquares[i] = 'O';

        onPlay(nextSquares);
    }

    let status;

    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
        <div className="game-board">
            <div className="status"><p>{status}</p></div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </div>
    )
}

Board.propTypes = {
    xIsNext: PropTypes.bool,
    squares: PropTypes.arrayOf(PropTypes.string),
    onPlay: PropTypes.func
}

export default Board;