import React from 'react';
import Card from './Card';

const CardList = (props) => {
        return (
             <div>   
                    {
                    props.robots.map((robot,i) => {
                        return <Card key={i} robot={robot} />
                    })
                    }
                </div>
            )  
}
export default CardList;