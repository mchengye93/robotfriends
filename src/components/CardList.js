import React from 'react';
import Card from './Card';

const CardList = (props) => {
        return (
             <div>   
                    {
                    props.robots.map((robot) => {
                        return <Card robot={robot} />
                    })
                    }
                </div>
            )  
}
export default CardList;