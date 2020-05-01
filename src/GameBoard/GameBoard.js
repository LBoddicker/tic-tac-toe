import React from 'react';
import './GameBoard.css';
import GameSquare from '../GameSquare/GameSquare';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function GameBoard(props) {
    return (
        //TODO: We will need to propogate the props down to the GameSquares
        //How we will do this all depends on how we will make the callback functions

        <Grid container spacing={0} justify="center" direction="column" alignItems="center">
            <Grid spacing={0} container item justify="center">
                    <GameSquare value={props.boardState[0]} clickFunc={() => props.callBack(0)}/>
                    <GameSquare value={props.boardState[1]} clickFunc={() => props.callBack(1)}/>
                    <GameSquare value={props.boardState[2]} clickFunc={() => props.callBack(2)}/>
            </Grid>
            <Grid spacing={0} container item justify="center">
                <GameSquare value={props.boardState[3]} clickFunc={() => props.callBack(3)}/>
                <GameSquare value={props.boardState[4]} clickFunc={() => props.callBack(4)}/>
                <GameSquare value={props.boardState[5]} clickFunc={() => props.callBack(5)}/>
            </Grid>
            <Grid spacing={0} container item justify="center">
                <GameSquare value={props.boardState[6]} clickFunc={() => props.callBack(6)}/>
                <GameSquare value={props.boardState[7]} clickFunc={() => props.callBack(7)}/>
                <GameSquare value={props.boardState[8]} clickFunc={() => props.callBack(8)}/>
            </Grid>
        </Grid>


        // <div>
        //     <div className="board_row">
        //         <GameSquare value={props.boardState[0]} clickFunc={() => props.callBack(0)}/>
        //         <GameSquare value={props.boardState[1]} clickFunc={() => props.callBack(1)}/>
        //         <GameSquare value={props.boardState[2]} clickFunc={() => props.callBack(2)}/>
        //     </div>
        //     <div className="board_row">
        //         <GameSquare value={props.boardState[3]} clickFunc={() => props.callBack(3)}/>
        //         <GameSquare value={props.boardState[4]} clickFunc={() => props.callBack(4)}/>
        //         <GameSquare value={props.boardState[5]} clickFunc={() => props.callBack(5)}/>
        //     </div>
        //     <div className="board_row">
        //         <GameSquare value={props.boardState[6]} clickFunc={() => props.callBack(6)}/>
        //         <GameSquare value={props.boardState[7]} clickFunc={() => props.callBack(7)}/>
        //         <GameSquare value={props.boardState[8]} clickFunc={() => props.callBack(8)}/>
        //     </div>
        // </div>
    );
}

export default GameBoard;