import React from 'react'
import { useState } from 'react'
import Errors from './Errors'
import './SignupLogin.css'

const Signup = ({ handleSignupLogin, errors }) => {

    const [state, setState] = useState({})

    const onChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const config = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(state)
        }
        fetch('/users', config)
            .then(resp => resp.json())
            .then(data => {
                handleSignupLogin(data)})
    }

    return (
        <div className='signup__login' >
            <br/>
            <form onSubmit={handleSubmit}>
                <fieldset >
                    <legend>Sign up</legend>
                    <br/>
                    <label>Username:<br />
                        <input onChange={onChange} type='text' name='username'/></label><br />
                    <label>Email:<br />
                        <input onChange={onChange} type='text' name='email'/></label><br />
                    <label>Password:<br />
                        <input onChange={onChange} type='password' name='password'/></label><br />
                        <br />
                        <input type='submit'></input>
                </fieldset>
            </form>
            <Errors errors={errors} />
        </div>
    )
}

export default Signup