import movesStyle from './Moves.module.css';

type MovesPropsType = {
  setCurrentMove: (move: number) => void;
  history: Array<Array<string>>;
};

function Moves({ setCurrentMove, history }: MovesPropsType) {
  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_, move) => {
    const description = move > 0 ? `Go to move #${move}` : 'Go to game start';

    return (
            <li key={move}>
                <button type="button" onClick={() => jumpTo(move)}>
                    {description}
                </button>
            </li>
    );
  });

  return (
        <div className={movesStyle.gameInfo}>
            <ol>
                {moves}
            </ol>
        </div>
  );
}

export default Moves;
