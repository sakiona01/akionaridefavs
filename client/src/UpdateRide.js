import React, { useState } from 'react'
import Errors from './Errors'
import { useHistory } from 'react-router'

const UpdateRide = ({ categories, errors, rides, setRides, rideUpdate }) => {

    const {id} = rideUpdate

    const navigate = useHistory()
    const [state, setState] = useState({title: rideUpdate.title, overview: rideUpdate.overview, poster_url: rideUpdate.poster_url, trailer_url: rideUpdate.trailer_url})

    const onChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value})
    }

    const handleUpdateRide = (e) => {
        e.preventDefault()
        let config = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(state)
        }
        fetch(`/rides/${id}`, config)
            .then(resp => resp.json())
            .then(data => {
                if(!data.errors) {
                    setRides(rides.map(ride => ride.id === id ? data : ride))
                    navigate.push('/ridecollection')
                }
            } 
        )
    }

    const renderCategories = () => {
        return categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)
    }

    return (
        <div className='add__ride__div'>
            <br />
            <h5 id="add__ride__header">Update Ride</h5>
            <div className='add__ride__form'>
                <form onSubmit={handleUpdateRide} >
                    <input onChange={onChange} type="text" value={state.title} name='title' placeholder='Enter ride title' size='101'></input><br />
                    <p><br />
                        <select onChange={onChange} className='category__select' name="category_id">
                            <option disabled selected value> -- Select a category -- </option>
                            {renderCategories()}
                        </select>
                    </p>
                    <p>
                        <input onChange={onChange} type="text" name='poster_url' value={state.poster_url} placeholder='Enter ride poster url' size='101'></input>
                    </p>
                    <p>
                        <input onChange={onChange} type="text" name='trailer_url' value={state.trailer_url} placeholder='Enter ride clip url' size='101'></input>
                    </p>
                        <textarea onChange={onChange} name='overview' value={state.overview} placeholder='Enter ride overview' cols='100' rows='6'></textarea><br />
                        <input type='submit' ></input>
                    </form>
                    <Errors errors={errors} />
            </div>
        </div>
    )
}

export default UpdateRide