import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardImg, CardBody, CardTitle, Button, Modal } from 'reactstrap'

import { useDispatch } from 'react-redux'
import { detailByID } from '../redux/action'

export default function MoviesList(props) {
	const [modal, setModal] = useState(false)
	const [curImages, setCurImages] = useState('')
	const dispatch = useDispatch()

	const toggle = async (img) => {
		setModal(!modal)
		setCurImages(img)
	}

	const handleDetailByID = async (imdbID) => {
		dispatch(detailByID(imdbID))
	}

	return (
		<React.Fragment>
			<div className='row' id='list'>
				{props.data.map((items, i) => (
					<div className='col-lg-3 mb-3' key={i}>
						<Card>
							<CardImg
								top
								width='100%'
								src={items.Poster}
								alt='Movies Poster'
								onClick={() => toggle(items.Poster)}
								style={{ cursor: 'pointer' }}
							/>
							<CardBody className='text-center'>
								<CardTitle tag='h5'>
									{items.Title} ({items.Year})
								</CardTitle>
								<CardTitle tag='h5'>{items.Genre}</CardTitle>
								<Button name='imdbID'>
									<Link
										to='/detail-movie'
										onClick={() => handleDetailByID(items.imdbID)}
										style={{ textDecoration: 'none', color: '#ffffff' }}
									>
										Detail
									</Link>
								</Button>
							</CardBody>
						</Card>
					</div>
				))}
			</div>
			<Modal isOpen={modal} toggle={toggle}>
				<img src={curImages} alt='' />
			</Modal>
		</React.Fragment>
	)
}
