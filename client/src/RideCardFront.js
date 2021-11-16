import React from "react";
import { Card } from 'react-bootstrap'
import './RideCard.css'

const RideCardFront = ({ride}) => {
    return (
        <div className='ride__card__front' >
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ride.poster_url} />
        </Card> 
        </div>
    );
};

export default RideCardFront;