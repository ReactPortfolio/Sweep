import * as React from 'react';
import Board from '../Board';
import Player from '../Player';
export default (props: any) => {
  const activeStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#a32121',
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center'
  };
  return <div style={activeStyle as any}>
  <Player
  isTurn = {false}
  playerScore={10}
  teamScore={40}
  profilePic={''}
  position= {'top'}
  isTwoPlayerGame={true}
  />
  <div style={{display: 'flex', flexDirection: 'row'}}>
  <Player
  isTurn = {false}
  playerScore={10}
  teamScore={20}
  profilePic={''}
  position= {'left'}
  isTwoPlayerGame={true}
  />
  <Board />
  <Player
  isTurn = {false}
  playerScore={10}
  teamScore={30}
  profilePic={''}
  position= {'right'}
  isTwoPlayerGame={true}
  />
  </div>
  <Player
  isTurn = {false}
  playerScore={10}
  teamScore={50}
  profilePic={''}
  position= {'bottom'}
  isTwoPlayerGame={true}
  />
  </div>;
}
