import * as React from 'react'

export interface CardProps {
  visible: boolean;
  number: number;
  type: string;
  style?: any;
}

export default (props: CardProps) => {
  const defaultStyle: any = {
    width: '68px',
    height: '99px',
    backgroundColor: 'yellow',
    backgroundSize: 'contain'
  };
  let activeStyle = {...defaultStyle, ...props.style };
  if (props.visible) {
    const cardNumber = props.number + props.type;
    activeStyle.backgroundColor = 'transparent';
    activeStyle.backgroundImage = `url(/assets/images/${cardNumber}.svg)`;
    activeStyle.backgroundRepeat = 'no-repeat';
  }

  return <div style={activeStyle}>
  </div>;
};
