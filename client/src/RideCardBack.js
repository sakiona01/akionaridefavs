import React from 'react'
import './RideCard.css'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useHistory } from 'react-router'

const RideCardBack = ({ride, setRideUpdate, rides, setRides, userCategories }) => {

    const {id} = ride
    const navigate = useHistory()

    const handleClick = () => {
        setRideUpdate(ride)
        navigate.push ('/updateride')
    }

    const handleDeleteRide = () => {
        let config = {
            method: 'DELETE'
        }

        fetch(`/rides/${id}`, config)
        setRides(
            rides.filter(ride => {
                return ride.id !== id 
            })
        )
    }

    // const handleFavorite = (e) => {
    //     e.preventDefault()
    //     let config = {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify({favorite: true})
    //     }
    //     fetch("/rides/", config)
    //         .then(resp => resp.json())
    //         .then(data => {
    //             if(!data.errors) {
    //                 setFavorites([...favorites, data])
    //             }
    //         } 
    //     )
    // }

    // const handleRemoveFavorite = (e) => {
    //     e.preventDefault()
    //     let config = {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         },
    //         body: JSON.stringify({favorite: false})
    //     }
    //     fetch(`/rides/${id}`, config)
    //         .then(resp => resp.json())
    //         .then(data => {
    //             console.log(data)
    //             if(!data.errors) {
    //                 setFavorites(filterFavorites())
    //             }
    //         } 
    //     )
    // }

    // const filterFavorites = () => {
    //     return favorites.filter(favorite => favorite.id !== id)
    // }

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <div className='ride__card__back'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top"  />
                <Card.Body>
                    <Card.Title>{ride.title}</Card.Title>
                    <Card.Text>
                    {truncate(ride.overview, 160)}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><Card.Link href={ride.trailer_url} target="_blank">Watch Ride Clip</Card.Link></ListGroupItem>
                </ListGroup>
                {/* <ListGroup className="list-group-flush">
                    {   ride.favorite 
                        ?<ListGroupItem><Card.Link onClick={handleRemoveFavorite} href="#">Remove favorite</Card.Link></ListGroupItem>
                        :<ListGroupItem><Card.Link onClick={handleFavorite} href="#">Add to favorites</Card.Link></ListGroupItem>
                    }
                </ListGroup> */}
                <Card.Body>
                    {   ride.favorite
                        ?   <Card.Link onClick={handleClick} >Update Ride</Card.Link>
                        :<>
                            <Card.Link onClick={handleClick} >Update Ride</Card.Link>
                            <Card.Link onClick={handleDeleteRide} href="#" >Delete Ride</Card.Link >
                        </>
                    }
                </Card.Body>
            </Card>
        </div>
    )
}

export default RideCardBack