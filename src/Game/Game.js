import React from 'react'
import './Game.css'
import GameBoard from '../GameBoard/GameBoard'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  cur_state : new Array(9).fill(null),
                        xIsNext: true,
                        };
    }

    squareClickHandler = (squareNum) => {
        var tempBoard = this.state.cur_state.slice();
        if(tempBoard[squareNum] !== null){
            this.setState({
                xIsNext: !this.state.xIsNext,
            })
        } else {
            tempBoard[squareNum] = this.state.xIsNext? 'X' : 'O';
            this.setState({
                cur_state : tempBoard,
                xIsNext: !this.state.xIsNext,
            });
        }
    }

    resetButtonHandler = () => {
        this.setState({
            cur_state: new Array(9).fill(null),
        });
    }

    detectWinFunc = (arr) => {
        var positions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        for (var i = 0; i < positions.length; i++) {
            if( this.state.cur_state[positions[i][0]] === this.state.cur_state[positions[i][1]] &&
                this.state.cur_state[positions[i][1]] === this.state.cur_state[positions[i][2]] &&
                this.state.cur_state[positions[i][0]] === this.state.cur_state[positions[i][2]] &&
                this.state.cur_state[positions[i][0]] !== null) {
                return true;
            }
        }

        return false;
    }

    render() {
        var message;
        if(this.detectWinFunc(this.state.cur_state)) {
            message = 'WIN';
        } else {
            message = 'NO WIN';
        }

        var turn_message;
        if(this.state.xIsNext){
            turn_message = "it is X's turn";
        } else {
            turn_message = "it is O's turn";
        }

        return (
            <div>
                <p>{turn_message}</p>
                <p>{message}</p>
                <GameBoard boardState={this.state.cur_state} callBack={this.squareClickHandler}/>
                <button onClick={this.resetButtonHandler}>Reset Game</button>
            </div>
        );
    }
}

export default Game
