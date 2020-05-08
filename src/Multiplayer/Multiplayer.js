import React from 'react'

import Game from '../Game/Game'
import MultiplayerSelect from '../MultiplayerSelect/MultiplayerSelect'
import JoinOnline from '../JoinOnline/JoinOnline'
import CreateOnline from '../CreateOnline/CreateOnline'
import {MULTIPLAYER_PAGES} from '../Constants'
import ClientSocket from '../ClientSocket'

class Multiplayer extends React.Component 
{
    constructor(props)
    {
        super(props)
        this.state = {
            cur_page : MULTIPLAYER_PAGES.SELECT_TYPE
        }
    }

    changePage = (pageName) => {
        this.setState( {cur_page : pageName} )
    }

    render()
    {
        var curDisplay
        switch(this.state.cur_page){
        case MULTIPLAYER_PAGES.SELECT_TYPE:
            curDisplay = <MultiplayerSelect callBack={this.changePage}/>
            break;
        case MULTIPLAYER_PAGES.JOIN:
            curDisplay = <JoinOnline />
            break;
        case MULTIPLAYER_PAGES.CREATE:
            curDisplay = <CreateOnline />
            break;
        case MULTIPLAYER_PAGES.PLAY_GAME:
            curDisplay = <Game />
            break;
        default:
            throw new Error('Invalid Multiplayer state selection')
        }

        return(
            <div>
                {curDisplay}
            </div>
        );
    }
}

export default Multiplayer;