import './App.css'
import {useState} from "react";

function Square() {
    const [value, setValue] = useState(null)

    function handelClick() {
        setValue('X')
    }

    return (
        <button
            className={'square'}
            onClick={handelClick}
        >
            {value}</button>
    )
}

export default function App() {
  return (
      <>
        <div className="board-row">
            <Square value={'1'}/>
            <Square value={'2'}/>
            <Square value={'3'}/>
        </div>
        <div className="board-row">
            <Square value={'4'}/>
            <Square value={'5'}/>
            <Square value={'6'}/>
        </div>
        <div className="board-row">
            <Square value={'7'}/>
            <Square value={'8'}/>
            <Square value={'9'}/>
        </div>
      </>
  )
}
