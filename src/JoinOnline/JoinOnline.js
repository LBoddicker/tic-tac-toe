import React from 'react'
import ClientSocket from '../ClientSocket'

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const JoinOnline = (props) => {
    const classes = useStyles();

    return(
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Join Game
                </Typography>
                
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Game Room ID"
                    name="lastName"
                    autoComplete="lname"
                />
                
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Join
                </Button>
            </div>
        </Container>
    );
}

export default JoinOnline;