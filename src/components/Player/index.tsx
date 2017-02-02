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
    let playerStyle : any, scoreStyle: any, handStyle: any, profileStyle: any;
    let width = 250;
    const {
        isTwoPlayerGame,
        playerScore,
        teamScore,
        position
    } = props;
    const isVertical = position === 'left' || position === 'right';
    playerStyle = {
        display: 'flex',
        flexDirection: isVertical ? 'column' :'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: isVertical ? width/3 + 'px' : width + 'px',
        height: isVertical ? width + 'px': width/3 + 'px',
        border: '5px solid silver',
        margin: '25px'
    }
    scoreStyle = {
        width: width/3 + 'px',
        height: width/3 + 'px' ,
        fontSize: isTwoPlayerGame ? '20px' : '30px',
        border: 'none',
        borderBottom:  isVertical ? '5px solid silver' : 'none',
        borderRight: !isVertical ? '5px solid silver' : 'none'
    }
    profileStyle = {
        position: 'relative',
        width: width/3 + 'px',
        height: width/3 + 'px' ,
        border: 'none',
        borderBottom: isVertical ? '5px solid silver' : 'none',
        borderRight: !isVertical ? '5px solid silver' : 'none'
    }
    handStyle = {
        width: width/3 + 'px',
        height: width/3 + 'px'
    }
    const profileName: any = {
        position: 'absolute'
    }
    const score = isTwoPlayerGame ? playerScore + '/' + teamScore : teamScore + '';
    return <div style={playerStyle as any}>
        <div style={scoreStyle as any}>{score}</div>
        <div style={profileStyle}>
            <div style={profileName}></div>

        </div>
        <div style={handStyle as any}>
        <Card
        visible={true}
        number={2}
        type={'spades'}
        style={{height: (width / 3) -10 + 'px',width: (68/99) * (width/3) }} 
        />


        </div>
    </div>
}
