import React from 'react'
import Movies from './components/Movies'
import DetailMovies from './components/DetailMovies'
import { Route } from 'react-router-dom'

export default function App() {
	return (
		<div className='container'>
			<Route exact path='/'>
				<Movies />
			</Route>
			<Route path='/detail-movie'>
				<DetailMovies />
			</Route>
		</div>
	)
}
