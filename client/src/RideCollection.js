import React from 'react'
import RideCard from './RideCard'
import './RideCollection.css'
import { useEffect, useState } from 'react';

const RideCollection = ({ userCategories, setRideUpdate }) => {

    const [rides, setRides] = useState([])

    useEffect(() => {
        fetch('/rides')
        .then(res => res.json())
        .then(data => setRides(data))

    },[])

    const handleDeleteRide = (deleteId) => {
        // let config = {
        //     method: 'DELETE'
        // }
        fetch(`/rides/${deleteId}`, {
            method: "DELETE",
        })
        // .then(res => res.json())
        .then(() => {
            // handleDeleteRide(rides.id)
            console.log(rides)
            setRides(rides.filter(ride => ride.id != deleteId))
        })
        // setRides(
        //     rides.filter(ride => {
        //         return ride.id !== id 
        //     })
        // )

    }


    // const renderRideCard = () => {
    //     return rides.map((ride) => {
    //         return <RideCard key={ride.id} ride={ride} setRideUpdate={setRideUpdate} rides={rides} setRides={setRides}  userCategories={userCategories} />
    //     })
    // }

    return (
        <div className='ride__collection__div'>
            <br />
            <h5 className='title__ridecollection' >Rides </h5>
            <br/>
            <br />
            <br />
            <br />
            <div className='ride__collection'>
               {rides.map(ride => <RideCard key={ride.id} ride={ride} handleDeleteRide={handleDeleteRide} setRideUpdate={setRideUpdate}/> )}
            </div>
        </div>
    )
}

export default RideCollection