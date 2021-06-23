import React from 'react'
import Card from "../../Card/Card";
import ColumnTitle from "./ColumnTitle";
import AddCard from "../../Card/AddCard/AddCard";
import {FlexItem} from 'ui';
import {
	IAddCard, IAddComment, ICard,
	IChangeCard, IChangeComment, IColumn,
	IComment, IDeleteCard, IDeleteComment, IEditColumnTitle
} from "interface";

interface IProps {
	cards: {
		cards: ICard[],
		addCard: IAddCard,
		deleteCard: IDeleteCard,
		changeCard: IChangeCard,
	},
	comments: {
		comments: IComment[]
		addComment: IAddComment,
		changeComment: IChangeComment,
		deleteComment: IDeleteComment,
	},
	column: IColumn,
	editColumnTitle: IEditColumnTitle
}


function Column({cards, comments, column, editColumnTitle}: IProps) {
	const filteredCards = cards.cards.filter(cards => cards.columnId === column.id)
	return (
		<FlexItem $column>
			<ColumnTitle editColumnTitle={editColumnTitle} columnTitle={column.columnTitle} id={column.id}/>
			{
				filteredCards.map(card => <Card key={card.id}
				                                cardProps={{
					                                card,
					                                deleteCard: cards.deleteCard,
					                                changeCard: cards.changeCard
				                                }} comments={comments}/>)
			}
			<div>
				<AddCard addCard={cards.addCard} columnId={column.id}/>
			</div>
		</FlexItem>
	)
}

export default Column