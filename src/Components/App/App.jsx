import './App.css';

import {useState} from "react";
import Board from "../Board/Board.jsx";
import Moves from "../Moves/Moves.jsx";

export default function App() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 === 0;

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    return (
        <div className={'game'}>
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
            <Moves setCurrentMove={setCurrentMove} history={history}/>
        </div>
    )
}
