import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap'

import MoviesList from './MoviesList'

import { useSelector, useDispatch } from 'react-redux'
import { searchMovies } from '../redux/action'

export default function Movies() {
	const [title, setTitle] = useState('')
	const globalState = useSelector((state) => state)
	const movies = useSelector((state) => state.movies)
	const dispatch = useDispatch()

	const handleTitle = (event) => {
		setTitle(event.target.value)
	}

	const handleSearch = async (event) => {
		event.preventDefault()
		dispatch(searchMovies(title))
	}

	return (
		<div className='row'>
			<div className='col-lg-12'>
				<h2 data-testid='title'>Movies App Bibit</h2>
				<Form inline onSubmit={handleSearch}>
					<FormGroup className=''>
						<Label className='mr-2' data-testid='subtitle'>
							Search Title
						</Label>
						<Input
							className='mr-2'
							type='text'
							name='title'
							placeholder='Search Movie Title'
							onChange={handleTitle}
							data-testid='input'
						/>
					</FormGroup>
					<Button type='submit' className='mt-4'>
						Search
					</Button>
				</Form>
				<hr />
				{globalState.isLoading && <Spinner color='primary' />}
				{!globalState.isLoading && movies && <MoviesList data={movies} />}
			</div>
		</div>
	)
}
