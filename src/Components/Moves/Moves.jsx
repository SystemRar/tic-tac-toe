import './Moves.css';

import PropTypes from "prop-types";

function Moves({ setCurrentMove, history }) {
    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        move > 0 ? description = `Go to move #${move}` : description = 'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    });

    return (
        <div className="game-info">
            <ol>
                {moves}
            </ol>
        </div>
    )
}

Moves.propTypes = {
    setCurrentMove: PropTypes.func,
    history: PropTypes.arrayOf(PropTypes.array)
}

export default Moves;