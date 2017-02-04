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
    let width = 250;
    const {
        isTwoPlayerGame,
        playerScore,
        teamScore,
        position
    } = props;
    const isVertical = position === 'left' || position === 'right';
    const styles = {
      baseStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: width/3 + 'px',
        height: width/3 + 'px' ,
        border: 'none',
      },
      scoreStyle : {
          fontSize: isTwoPlayerGame ? '20px' : '30px',
          borderBottom:  isVertical ? '5px solid silver' : 'none',
          borderRight: !isVertical ? '5px solid silver' : 'none'
      },
      profileStyle : {
          position: 'relative',
          borderBottom: isVertical ? '5px solid silver' : 'none',
          borderRight: !isVertical ? '5px solid silver' : 'none'
      },
      playerStyle : {
          display: 'flex',
          flexDirection: isVertical ? 'column' :'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: isVertical ? width/3 + 'px' : width + 'px',
          height: isVertical ? width + 'px': width/3 + 'px',
          border: '5px solid silver',
          margin: '25px'
      }

    }
    const profileName: any = {
        position: 'absolute'
    }
    const score = isTwoPlayerGame ? playerScore + '/' + teamScore : teamScore + '';
    return <div style={styles.playerStyle as any}>
        <div style={{...styles.baseStyle, ...styles.scoreStyle} as any}>{score}</div>
        <div style={{...styles.baseStyle, ...styles.profileStyle} as any}>
            <div style={profileName}></div>

        </div>
        <div style={styles.baseStyle as any}>
        <Card
        visible={true}
        number={2}
        type={'spades'}
        style={{height: (width / 3) -10 + 'px',width: (68/99) * (width/3) }}
        />


        </div>
    </div>
}
