import './Board.css';

import PropTypes from "prop-types";
import {useMemo} from "react";

import calculateWinner from "../../scripts/calculateWinner.js";
import Square from "../Square/Square.jsx";

function Board({ xIsNext, squares, onPlay }) {
    const winner = useMemo(() => calculateWinner(squares), [squares]);

    function handleClick(number) {
        if (squares[number] || winner) {
            return;
        }

        const nextSquares = squares.slice();
        xIsNext ? nextSquares[number] = 'X' : nextSquares[number] = 'O';

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