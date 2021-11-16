import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Signup from './SignUp';
import Login from './Login'
import Logout from './Logout'
import NavBar from './NavBar';
import RideCollection from './RideCollection';
import AddRide from './AddRide';
import Favorites from './Favorites';
import UpdateRide from './UpdateRide';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

const [currentUser, setCurrentUser] = useState(null)
const [errors, setErrors] = useState([])
const [categories, setCategories] = useState([])
const [rides, setRides] = useState([])
const [userCategories, setUserCategories] = useState([])
const [rideUpdate, setRideUpdate] = useState({})
const [favorites, setFavorites] = useState([])

const navigate = useHistory();

const handleSignupLogin = (data) => {
  // data.errors ? setErrors(data.errors) : handleState(data)
  if(!data.errors) {
    navigate.push('/ridecollection')
    setErrors([])
  }
}

// const handleState = (data) => {
//   if(!data.errors){
//       setCurrentUser(data)
//       setRides(data.rides)
//       setUserCategories(data.categories)
//       setFavorites(filterFavorites(data.rides))
//   } else {
//     setRides([])
//     setFavorites([])
//   }
// }

const stateInitializer = () => {
  // checkSessionId()
  fetchCategories()
}

// const checkSessionId = () => {
  useEffect(() => {

  
  fetch("/me")
  .then(resp => {
    if (resp.ok) {
      resp.json().then(data => {
        setCurrentUser(data)
        setRides(data.rides)
        setUserCategories(data.categories)
        setFavorites(filterFavorites(data.rides))
      }) 
    } 
  })
},[])
// }

const fetchCategories = () => {
  fetch("/categories")
  .then(resp => resp.json())
  .then(data => setCategories(data))
}

const filterFavorites = (rides) => {
  return rides.filter(ride => {
    return ride.favorite === true
  })
}

useEffect(stateInitializer, [])


  return (
    <div className="App">
      <NavBar currentUser={currentUser} />
      <Switch>
          <Route exact path='/signup'>
            <Signup handleSignupLogin={handleSignupLogin} errors={errors} />
          </Route>
          <Route exact path='/login'>
            <Login handleSignupLogin={handleSignupLogin} errors={errors} />
          </Route>
          <Route exact path='/logout'>
            <Logout setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path='/ridecollection'>
            <RideCollection userCategories={userCategories} rides={rides} setRides={setRides} setRideUpdate={setRideUpdate} favorites={favorites} setFavorites={setFavorites}/>
          </Route>
          <Route exact path='/addride'>
            <AddRide categories={categories} setRides={setRides} errors={errors} rides={rides} />
          </Route>
          <Route exact path='/favorites'>
            <Favorites favorites={favorites} setFavorites={setFavorites} setRideUpdate={setRideUpdate}/>
          </Route>
          <Route exact path='/updateride'>
            <UpdateRide categories={categories} errors={errors} rideUpdate={rideUpdate} rides={rides} setRides={setRides}/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
