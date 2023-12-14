import './Square.css';

import PropTypes from "prop-types";

function Square({ value, onSquareClick }) {
    return (
        <button
            className={'square'}
            onClick={onSquareClick}
        >
            {value}</button>
    )
}

Square.propTypes = {
    value: PropTypes.string,
    onSquareClick: PropTypes.func
}

export default Square;