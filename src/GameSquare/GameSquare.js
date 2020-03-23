import React from 'react'
import './GameSquare.css'

function GameSquare(props) {
    return (
        <div>
            <button className="game_button" onClick={props.clickFunc}>
                {props.value}
            </button>
        </div>
    );
}

export default GameSquare;