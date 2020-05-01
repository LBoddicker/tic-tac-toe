import React from 'react'
import './Game.css'
import GameBoard from '../GameBoard/GameBoard'
import Display from '../Display/Display'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  cur_state : new Array(9).fill(null),
                        xIsNext: true,
                        };
    }

    squareClickHandler = (squareNum) => {
        var tempBoard = this.state.cur_state.slice();
        if(tempBoard[squareNum] === null && !this.detectWinFunc(this.state.cur_state)){
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

    gameFinished = (arr) => {
        for(var i = 0; i < 9; i++){
            if(arr[i] === null){
                return false;
            }
        }
        return true;
    }

    detectTie = (arr) => {
        if(this.gameFinished(arr) && !this.detectWinFunc(arr)){
            return true;
        }
        return false;
    }

    render() {
        var playerTurn;
        var buttonMessage = "Reset"

        if(this.state.xIsNext){
            playerTurn = "X's turn";
        } else {
            playerTurn = "O's turn";
        }

        if(this.detectWinFunc(this.state.cur_state)) {
            playerTurn = this.state.xIsNext ? 'O WON' : 'X WON';
            buttonMessage = "Play Again"
        }

        if(this.detectTie(this.state.cur_state)){
            playerTurn = "TIE";
            buttonMessage = "Play Again"
        }

        return (
            <div>
                <Display
                    boardState={this.state.cur_state}
                    callBack={this.squareClickHandler}
                    playerTurn={playerTurn}
                    buttonMessage={buttonMessage}
                    resetCallBack={this.resetButtonHandler}
                />
            </div>
        );
    }
}

export default Game
