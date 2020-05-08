import React from 'react';
import './App.css';
import Game from './Game/Game'
import GameSelect from './GameSelect/GameSelect'
import NavBar from './NavBar/NavBar'
import Multiplayer from './Multiplayer/Multiplayer'
import {PAGES} from './Constants'

import CssBaseline from '@material-ui/core/CssBaseline';

class App extends React.Component {

  constructor(props)
  {
    super(props)
    this.state = {
      cur_page : PAGES.GAME_SELECT
    }
  }

  changePage = (pageName) => {
    this.setState( {cur_page : pageName} )
  }

  render() {
    var curDisplay
    switch(this.state.cur_page){
      case PAGES.GAME_SELECT:
        curDisplay = <GameSelect callBack={this.changePage}/>
        break;
      case PAGES.SINGLE_PLAYER_EASY:
        curDisplay = <Game gameType={PAGES.SINGLE_PLAYER_EASY}/>
        break;
        case PAGES.TWO_PLAYER_LOCAL:
          curDisplay = <Game gameType={PAGES.TWO_PLAYER_LOCAL}/>
          break;
        case PAGES.MULTIPLAYER:
          curDisplay = <Multiplayer />
          break;
      default:
        throw new Error('Invalid App state selection')
    }

    return (
      <div className="App">
        <CssBaseline/>
        <NavBar callBack={this.changePage}/>
        {curDisplay}
      </div>
    );
  }
}

export default App;
