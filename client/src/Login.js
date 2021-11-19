import React from "react";
import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useUser } from './hooks/useUser'

import './SignupLogin.css'
import Errors from "./Errors";

const Login = ({ handleSignupLogin, errors, currentUser, setCurrentUser }) => {
    const [formData, setFormData] = useState({});
    const { user, setUser } = useUser()


    const navigate = useHistory();

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    let config = {
                method: "POST",
                headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        },
        body: JSON.stringify(formData),
    };

    fetch("/login", config)
        .then((res) => res.json())
        .then((userResponse) => {
            console.log(userResponse, 'login data')
            console.log('handleSignupLogin data:', userResponse)
            // data.errors ? setErrors(data.errors) : handleState(data)
            if(!userResponse.errors) {
                // setCurrentUser(userResponse)
                setUser(userResponse)
                navigate.push('/ridecollection')
                // setErrors([])
            }
        });
    };

    return (
        <div>
            <br />
            <br />
            <div className="signup__login">
                <form onSubmit={handleSubmit}>
                    <br />
                        <label>Username:<br />
                            <input onChange={onChange} className='input__username' id='username' type="text" name="username" /></label><br />
                        <label>Password:<br />
                            <input onChange={onChange} className='input__password' type="password" name="password" /></label><br /><br />
                        <input id='submit' type="submit"></input>
                </form><br />
                    <p>New to Akiona Ride Favs? <a href='/signup'>Sign up</a></p>
                <Errors errors={errors} />
            </div>
        </div>
    );
};

export default Login;