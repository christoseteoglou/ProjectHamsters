import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
	return (
		<div className="cards">
			<h1>Check out these EPIC fights!</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							src='./img/img-1.jpg'
							text='Explore similar EPIC fights as this one'
							label='Adventure'
							path="/gallery"
						/>
						<CardItem
							src='./img/img-2.jpg'
							text='Past winners!'
							label='Luxury'
							path="/gallery"
						/>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Cards
