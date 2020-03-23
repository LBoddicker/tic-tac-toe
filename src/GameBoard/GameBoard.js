import React from 'react';
import './GameBoard.css';
import GameSquare from '../GameSquare/GameSquare';

function GameBoard(props) {
    return (
        //TODO: We will need to propogate the props down to the GameSquares
        //How we will do this all depends on how we will make the callback functions
        <div>
            <div className="board_row">
                <GameSquare/>
                <GameSquare/>
                <GameSquare/>
            </div>
            <div className="board_row">
                <GameSquare/>
                <GameSquare/>
                <GameSquare/>
            </div>
            <div className="board_row">
                <GameSquare/>
                <GameSquare/>
                <GameSquare/>
            </div>
        </div>
    );
}

export default GameBoard;