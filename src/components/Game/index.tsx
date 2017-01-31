import * as React from 'react';
import Board from '../Board';
export default (props: any) => {
  const activeStyle = {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#a32121',
    width: '100%',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center'
  };
  return <div style={activeStyle as any}>
  <Board />
  </div>;
}
