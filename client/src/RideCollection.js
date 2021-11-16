import React from 'react'
import RideCard from './RideCard'
import './RideCollection.css'

const RideCollection = ({ userCategories, rides, setRides, setRideUpdate, favorites, setFavorites }) => {

    const renderRideCard = () => {
        return rides.map((ride) => {
            return <RideCard key={ride.id} ride={ride} setRideUpdate={setRideUpdate} rides={rides} setRides={setRides} favorites={favorites} setFavorites={setFavorites} userCategories={userCategories} />
        })
    }

    return (
        <div className='ride__collection__div'>
            <br />
            <h5 className='title__ridecollection' >Rides </h5>
            <br/>
            <br />
            <br />
            <br />
            <div className='ride__collection'>
                {renderRideCard()}
            </div>
        </div>
    )
}

export default RideCollection