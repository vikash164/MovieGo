
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./components/homepage/homepage"
// import Home from "./components/pages/Home"
import Navbar from './components/inc/Navbar';
import Login from "./components/login/login"
import Register from "./components/register/register"
import Payment from './components/pages/Payment';
import Eticket from './components/pages/Eticket'
import MovieSelector from './components/pages/MovieSelector'
import SeatAvailability from "./components/pages/SeatAvailibility"
import SeatMatrix from "./components/pages/SeatMatrix"
import PriceCalculator from "./components/pages/PriceCalculator"
import GithubLogo from './components/pages/GithubLogo'

import MovieContext from './components/contexts/MovieContext'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [movies, EditMovies] = useState({
		movieNames: {
			"Adiprush": 200,
			"Fast X": 250,
			"Ant-Man": 100,
			"Avenger": 150,
			"Salaar": 300
		},
		moviePrice: 100,
		totalSeats: 0,
		seatNumbers: []
	})

  const [ user, setLoginUser] = useState({})
  return (
     <Router>
     <div className="App">
       <Navbar/>
      
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/Eticket">
            <Eticket />
          </Route>
          <Route path='/Payment'>
           <Payment/>
           </Route>
           <div className="main container">
			<MovieContext.Provider value={{ movies, changeState: EditMovies }}>
				<GithubLogo/>
				<MovieSelector />
				<SeatMatrix />
				<SeatAvailability />
				<PriceCalculator />
			</MovieContext.Provider>
		</div>
        </Switch>
        </div>
      </Router>
    
  );
}

export default App;
