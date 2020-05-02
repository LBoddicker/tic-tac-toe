import React from 'react'
import './Display.css'
import GameBoard from '../GameBoard/GameBoard'

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const Display = (props) => {
    const classes = useStyles();



    return (
        <Container component="main" maxWidth="md">
            <CssBaseline />
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                {props.playerTurn}
            </Typography>

            <Grid container spacing={2} justify="center" direction="column" alignItems="center">

                <GameBoard boardState={props.boardState} callBack={props.callBack}/>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={props.resetCallBack}
                >
                    {props.buttonMessage}
                </Button>

            </Grid>

            
        </Container>
    );
}

export default Display;