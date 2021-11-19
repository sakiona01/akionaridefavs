import React from 'react';
import { Spinner } from 'react-bootstrap' 
// import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useUser } from './hooks/useUser'

const Logout = () => {
    const { setUser } = useUser()
    const navigate = useHistory();

    // useEffect(() => {
    //     let config = {
    //         method: "DELETE",
    //     };

    //     fetch("/logout", config);
    //         handleLogout();
    // });

    // const handleLogout = () => {
    //     setCurrentUser(null);
    //     setTimeout(() => {
    //         navigate.push("/login");
    //     }, 2000);
    // };

    const handleLogout = () => {
        fetch("/logout", {
            method: "DELETE"
        })
        .then(resp => {
            if (resp.ok) {
                setUser({})
                navigate.push("/")
            }
        })
    }

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