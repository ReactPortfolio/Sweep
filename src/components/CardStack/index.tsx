import * as React from 'react';
import Card, { CardProps } from '../Card';

interface CardStackProps {
    cards: CardProps[]
}

export default (props: CardStackProps) => {
  console.log('props', props.cards);
  const styles = {
    cardStyle: {
      width: '55px',
      height: '80px'
    },
    cardStackStyle: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid green',
      padding: '3px',
      width: 'auto',
      height: 'auto'
    }

  }

  const cardElements = props.cards.map( (cardItem: CardProps) => {
          return <Card {...{...cardItem, ...{style: styles.cardStyle}}}
              />
          }
   );
   console.log('cardElements : ', cardElements);
    return <div style={styles.cardStackStyle as any}>
{cardElements}
</div>

}
