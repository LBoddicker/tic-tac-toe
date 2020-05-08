import React from 'react'
import {MULTIPLAYER_PAGES} from '../Constants'

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const MultiplayerSelect = (props) => {

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
                <Button onClick={() => props.callBack(MULTIPLAYER_PAGES.JOIN)}>Join game</Button>
                <Button onClick={() => props.callBack(MULTIPLAYER_PAGES.CREATE)}>Create game</Button>
                <Button onClick={() => props.callBack(MULTIPLAYER_PAGES.RANDOM_MATCH)}>Join random game</Button>
            </ButtonGroup>
        </Container>
    );
}

export default MultiplayerSelect;