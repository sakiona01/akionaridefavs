import React, { useState } from 'react'
import { useHistory } from 'react-router'
import Errors from './Errors'
import './AddRide.css'

const AddRide = ({ categories, setRides, errors, rides }) => {

    const [state, setState] = useState({})

    const navigate = useHistory()

    const onChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value})
    }

    const handleCreateRide = (e) => {
        e.preventDefault()
        let config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(state)
        }
        fetch('/rides', config)
            .then(resp => resp.json())
            .then(data => {
                if(!data.errors){
                    setRides([data, ...rides])
                    navigate.push('/ridecollection')
                }
            })
    }

    const renderCategories = () => {
        return categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)
        
    } 

    return (
        <div className='add__ride__div'>
            <br />
            <h5 className="title__addride">Add a ride to your colletion!</h5>
            <br />
            <br />
            <div className='add__ride__form'>
                <form onSubmit={handleCreateRide} >
                    <input onChange={onChange} type="text" name='title' placeholder='Enter ride title' size='101'></input><br />
                    <p><br />
                        <select onChange={onChange} className='category__select' name="category_id">
                            <option disabled selected value> -- Select a category -- </option>
                            {renderCategories()}
                        </select>
                    </p>
                    <p>
                        <input onChange={onChange} type="text" name='poster_url' placeholder='Enter ride poster url' size='101'></input>
                    </p>
                    <p>
                        <input onChange={onChange} type="text" name='trailer_url' placeholder='Enter ride trailer url' size='101'></input>
                    </p>
                    <textarea onChange={onChange} name='overview' placeholder='Enter ride overview' cols='100' rows='6'></textarea><br /><br />
                    <input type='submit' ></input>
                </form>
                <Errors errors={errors} />
            </div>
        </div>
    )
}

export default AddRide