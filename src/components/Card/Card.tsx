import React from 'react'
import {TitleH4, Cross, Footer, CardBlock, Header} from "ui";
import {ICard} from "interface";
import {useDispatch} from "react-redux";
import {cardsOperations} from "state/ducks/cards";
import {AppDispatch} from "state/store";


interface IProps {
	card: ICard,
	setModalCard: (props: { isOpen: boolean, cardId: number }) => void,
	countComments: number
}

function contentLength(content: string): string {
	if (content && content.length > 25) {
		return (content.slice(0, 22) + '...')
	}
	return content
}

function Card({card, setModalCard, countComments}: IProps) {
	const dispatch = useDispatch<AppDispatch>()

	function deleteCard(id: number) {
		dispatch(cardsOperations.DeleteCard(id))
	}

	return (
		<div>
			<CardBlock>
				<Header>
					<div/>
					<Cross onClick={() => deleteCard(card.id)}/>
				</Header>
				<div onClick={() => {
					setModalCard({isOpen: true, cardId: card.id})
				}}>
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
