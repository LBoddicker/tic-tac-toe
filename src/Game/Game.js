import React from 'react'
import './Game.css'
import GameBoard from '../GameBoard/GameBoard'

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  cur_state : [null,null,null,null,null,null,null,null,null],
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

    render() {
        return (
            <div>
                <GameBoard boardState={this.state.cur_state} callBack={this.squareClickHandler}/>
            </div>
        );
    }
}

export default Game
