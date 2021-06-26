import React from 'react'
import {TitleH4, Cross, Footer, CardBlock, Header} from "ui";
import {ICard, IChangeCard, IDeleteCard} from "interface";


interface IProps {
	cards: {
		card: ICard,
		deleteCard: IDeleteCard,
		changeCard: IChangeCard,
	},
	setCardIsOpen: (props: { isOpen: boolean, cardId: number }) => void,
	countComments: number
}

function contentLength(content: string): string {
	if (content && content.length > 25) {
		return (content.slice(0, 22) + '...')
	}
	return content
}

function Card({cards, setCardIsOpen, countComments}: IProps) {
	const {card} = cards
	return (
		<div>
			<CardBlock onClick={() => {
				setCardIsOpen({isOpen: true, cardId: card.id})
			}}>
				<Header>
					<div/>
					<Cross onClick={() => cards.deleteCard(card.id)}/>
				</Header>
				<div>
					<TitleH4>{card.cardTitle}</TitleH4>
					{contentLength(card.cardContent)}
				</div>
				<Footer>
					<div>
						{card.author}
					</div>
					<div>
						comments: {countComments}
					</div>
				</Footer>
			</CardBlock>
		</div>
	)
}

export default Card