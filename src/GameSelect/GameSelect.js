import React from 'react'
import './GameSelect.css'
import {PAGES} from '../Constants'

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

function GameSelect(props) {
    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <CssBaseline />
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Select Game Type
            </Typography>
            <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical outlined primary button group"
            >
                <Button onClick={() => props.callBack(PAGES.TWO_PLAYER_LOCAL)}>Two Player Local</Button>
                <Button onClick={() => props.callBack(PAGES.SINGLE_PLAYER_EASY)}>Single Player</Button>
            </ButtonGroup>
        </Container>
    );
}

export default GameSelect