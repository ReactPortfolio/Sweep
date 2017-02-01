import * as React from 'react';
import Card from '../Card';
import CardHome from '../CardHome';
const cardHomeData = [
  {
    number: 2,
    visible:true,
    type:'clubs',
    homeNumber: 13
  },{
    number: 2,
    visible:true,
    type:'clubs',
    homeNumber: 13
  },
    {
      number: 2,
      visible:true,
      type:'clubs',
      homeNumber: 13
    },{
      number: 2,
      visible:true,
      type:'clubs',
      homeNumber: 13
    }];
export default (props: any) => {
    const activeStyle = {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'green',
        width: '549px',
        height: '300px',
        padding: '20px',
        borderRadius: '10px'
    };
    return <div style={activeStyle} >
        <Card
            visible={true}
            number={2}
            type='clubs'
        />
        <CardHome
 isAmmendable={true}
 number={13}
 data={cardHomeData}
        />

    </div>;
};
