import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

export default function MoviesList(props) {
	return (
		<div className='row'>
			{props.data.map((items, i) => (
				<div className='col-lg-3 mb-3' key={i}>
					<Card>
						<CardImg top width='100%' src={items.Poster} alt='Card image cap' />
						<CardBody>
							<CardTitle tag='h5'>{items.Title}</CardTitle>
							<CardTitle tag='h5'>{items.Genre}</CardTitle>
							<CardSubtitle tag='h6' className='mb-2 text-muted'>
								{items.Year}
							</CardSubtitle>
						</CardBody>
					</Card>
				</div>
			))}
		</div>
	)
}
