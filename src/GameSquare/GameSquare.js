import React from 'react'
import './GameSquare.css'

import Button from '@material-ui/core/Button';

function GameSquare(props) {
    return (
        <div>
            <Button
                variant="outlined"
                color="primary"
                className="game_button"
                onClick={props.clickFunc}
                style={{ fontSize: '30px' }}
            >
                {props.value}
            </Button>
        </div>
    );
}

export default GameSquare;