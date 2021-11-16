import React from 'react';
import { Spinner } from 'react-bootstrap' 
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

const Logout = ({ setCurrentUser }) => {

    const navigate = useHistory();

    useEffect(() => {
        let config = {
            method: "DELETE",
        };

        fetch("/logout", config);
            handleLogout();
    });

    const handleLogout = () => {
        setCurrentUser(null);
        setTimeout(() => {
            navigate.push("/login");
        }, 2000);
    };

    return (
    <div className='spinner' >
        <br />
        <br />
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
    );
};

export default Logout;