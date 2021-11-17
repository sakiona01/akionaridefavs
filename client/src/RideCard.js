import React, { useState } from 'react'
import RideCardFront from './RideCardFront'
import RideCardBack from './RideCardBack'
import './RideCard.css'

const RideCard = ({ ride, setRideUpdate, rides, setRides, userCategories, handleDeleteRide }) => {

    const [visible, setVisible] = useState(true)

    const handleCardFlip = () => {
        setVisible(!visible)
        setRideUpdate(ride)
        }

    return (
        <div className='poster__div'>
            <div onClick={handleCardFlip} className='poster__card'>
                {visible ? <RideCardFront  ride={ride} /> : <RideCardBack ride={ride} handleDeleteRide={handleDeleteRide} setRideUpdate={setRideUpdate} rides={rides} setRides={setRides} userCategories={userCategories} />}
            </div>
        </div>
    )
}

export default RideCard