import * as React from 'react';
import Board from '../Board';
import Player from '../Player';
import CardStack from '../CardStack';
const cardStackData = [
    {
        number: 2,
        visible: true,
        type: 'clubs',
        homeNumber: 13
    }, {
        number: 2,
        visible: true,
        type: 'clubs',
        homeNumber: 13
    },
    {
        number: 2,
        visible: true,
        type: 'clubs',
        homeNumber: 13
    }, {
        number: 2,
        visible: true,
        type: 'clubs',
        homeNumber: 13
    }, {
        number: 2,
        visible: true,
        type: 'clubs',
        homeNumber: 13
    }, {
        number: 2,
        visible: true,
        type: 'clubs',
        homeNumber: 13
    },
    {
        number: 2,
        visible: true,
        type: 'clubs',
        homeNumber: 13
    }, {
        number: 2,
        visible: true,
        type: 'clubs',
        homeNumber: 13
    },{
        number: 2,
        visible: true,
        type: 'clubs',
        homeNumber: 13
    }, {
        number: 2,
        visible: true,
        type: 'clubs',
        homeNumber: 13
    },
    {
        number: 2,
        visible: true,
        type: 'clubs',
        homeNumber: 13
    }, {
        number: 2,
        visible: true,
        type: 'clubs',
        homeNumber: 13
    }];

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
            isTurn={false}
            playerScore={10}
            teamScore={40}
            profilePic={'spiderman'}
            position={'top'}
            isTwoPlayerGame={true}
        />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Player
                isTurn={false}
                playerScore={10}
                teamScore={20}
                profilePic={'person'}
                position={'left'}
                isTwoPlayerGame={true}
            />
            <Board />
            <Player
                isTurn={false}
                playerScore={30}
                teamScore={30}
                profilePic={'girl'}
                position={'right'}
                isTwoPlayerGame={false}
            />
        </div>
        <Player
            isTurn={false}
            playerScore={50}
            teamScore={50}
            profilePic={'ninja'}
            position={'bottom'}
            isTwoPlayerGame={false}
        />
        <CardStack
            cards={cardStackData}
        />
    </div>;
}
