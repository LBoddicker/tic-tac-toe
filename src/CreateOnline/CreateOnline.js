import React from 'react'
import ClientSocket from '../ClientSocket'

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
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

const requestID = () => {
    ClientSocket.emit('requestID')
    console.log('ID requested')
}

const CreateOnline = (props) => {
    const classes = useStyles();

    return(
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Create Game
                </Typography>
                
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={requestID}
                >
                    Generate Game ID
                </Button>

                <Typography component="h1" variant="h5">
                    1234
                </Typography>

            </div>
        </Container>
    );
}

export default CreateOnline;