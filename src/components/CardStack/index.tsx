import * as React from 'react';
import Card, { CardProps } from '../Card';

interface CardStackProps {
    cards: [CardProps]
}

export default (props: CardStackProps) => {
  const styles = {
    cardStyle: {
      width: '30px',
      height: '45px'
    },
    cardStackStyle: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    }

  }
  const cardsElements = props.cards.map( (cardItem: CardProps) => {
          return <Card {...{...cardItem, ...{style: styles.cardStyle}}}
              />
          }
   );
    return <div style={styles.cardStackStyle as any}>
{cardsElements}
</div>

}
