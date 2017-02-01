import * as React from 'react';
import Card, { CardProps } from '../Card';
interface IPlayerProps {
    isTwoPlayerGame: boolean;
    playerScore: number;
    teamScore: number;
    lastHand?: CardProps;
    profilePic: string;
    position: 'left' | 'right' | 'top' | 'bottom';
    isTurn: boolean;
    timerDuration?: number;
}
export default (props: IPlayerProps) => {
    let playerStyle, scoreStyle, handStyle, profileStyle;
    const height = '50px';
    const width = '100px';
    const {
        isTwoPlayerGame,
        playerScore,
        teamScore,
        position
    } = props;
    playerStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        height: 'auto',
        border: '5px solid silver',
        margin: '25px'
    }
    scoreStyle = {
        width: width,
        height: height,
        fontSize: isTwoPlayerGame ? '20px' : '30px',

    }
    profileStyle = {
        position: 'relative'
    }
    const profileName: any = {
        position: 'absolute'
    }

    switch (position) {
        case 'top':
        profileName.bottom = '10px';
        profileName.left = '0px';
            break;
        case 'bottom':
            break;
        case 'left':
            break;
        case 'right':
            break;
    }


    const score = isTwoPlayerGame ? playerScore + '/' + teamScore : teamScore + '';
    return <div style={playerStyle as any}>
        <div style={scoreStyle as any}>{score}</div>
        <div style={profileStyle}>
            <div style={profileName}></div>

        </div>
        <div style={handStyle as any}></div>
    </div>
}
