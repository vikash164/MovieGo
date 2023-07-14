import React, {useContext} from "react"
import MovieContext from "../contexts/MovieContext"
import { Link } from 'react-router-dom'

const PriceCalculator = () => {
	const {movies} = useContext(MovieContext)
	return (
		<div>
			<p>Selected {movies.totalSeats} seats and the total price is INR {movies.totalSeats*movies.moviePrice}</p>
			<div>
			<Link to='/payment' className='btn btn-outline-danger'>Book now</Link>
			</div>
		</div>
	)
}

export default PriceCalculator