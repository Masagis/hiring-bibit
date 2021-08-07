import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function DetailMovies() {
	const detailMovies = useSelector((state) => state.detailMovies)
	return (
		<React.Fragment>
			<div className='row mt-5'>
				<div className='mb-3 float-end ms-auto'>
					<button className='btn btn-primary btn-block'>
						<Link to='/' style={{ textDecoration: 'none', color: '#ffffff' }}>
							Kembali
						</Link>
					</button>
				</div>
				<div className='col-md-4'>
					<img
						src={detailMovies.Poster}
						alt='Movies Poster'
						className='img-fluid'
						style={{
							borderRadius: '10px',
							display: 'block',
							marginLeft: 'auto',
							marginRight: 'auto',
						}}
					/>
				</div>
				<div className='col-md-8'>
					<h3>
						{detailMovies.Title} ({detailMovies.Year})
					</h3>
					<p>{detailMovies.Plot}</p>
					<hr />
					<div className='row'>
						<div className='col-md-6'>
							<p>Genre: {detailMovies.Genre} </p>
							<p>Director: {detailMovies.Director}</p>
							<p>Actors: {detailMovies.Actors}</p>
							<p>Country: {detailMovies.Country}</p>
						</div>
						<div className='col-md-6'>
							<p>Runtime: {detailMovies.Runtime} </p>
							<p>Released: {detailMovies.Released}</p>
							<p>IMDb: {detailMovies.imdbRating}</p>
							<p>Production: {detailMovies.Production}</p>
						</div>
						<p>Writer: {detailMovies.Writer}</p>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default DetailMovies
