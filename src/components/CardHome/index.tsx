import * as React from 'react';
import Card, {CardProps} from '../Card';
interface CardHomePropsData extends CardProps {
  homeNumber?: number;
}

interface CardHomeProps {
  number: number;
  isAmmendable: boolean;
  data : CardHomePropsData[];
  owner?: number;
}

export default (props: CardHomeProps) => {
  const multiplier = 13,
  cardWidth = 68,
  cardHeight = 99;
  let cardHomeStyle: any = {
    position: 'relative',
    width: cardWidth + 'px', //Need to Store in constants for Card width
    margin: '5px',
    marginTop: '0px',
    height: ((multiplier * (props.data.length -1) + cardHeight) + 'px'),
    border: '1px solid red'
  };
  const numberHomeStyle = {
    position: 'absolute',
    top: '-18px',
    right: '39%',
    width: '18px',
    height: '18px',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgb(169, 22, 22)',
    fontSize: '14px',
    borderRadius:  '50%'
  };
  if(props.isAmmendable) {
    cardHomeStyle.boxShadow = 'rgb(8, 55, 228) 0px 0px 3px 2px';
  }
  const el = props.data.map((item, index) => {
    let activeCardStyle = {
      position: 'absolute',
      top: index * multiplier + 'px',
      zIndex: index,
      left: 0
    }
    return <Card
      number={item.number}
       visible={true}
        type={item.type}
        style={activeCardStyle}
         key={index} />
       });
  return <div style={cardHomeStyle}>
  <div style={numberHomeStyle as any}>{props.number}</div>
  {el}
  </div>;
};
