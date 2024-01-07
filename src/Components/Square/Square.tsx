import squareStyle from './Square.module.css';

type SquarePropsType = {
  value: string;
  onSquareClick: () => void;
};

function Square({ value, onSquareClick }: SquarePropsType) {
  return (
        <button
            type="button"
            className={squareStyle.square}
            onClick={onSquareClick}
        >
            {value}
        </button>
  );
}

export default Square;
