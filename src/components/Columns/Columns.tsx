import React from 'react'
import Column from "./Column/Column"
import {Flex} from "ui";
import {
	IAddCard, IAddComment, ICard,
	IChangeCard, IChangeComment, IColumn,
	IComment, IDeleteCard, IDeleteComment,
	IEditColumnTitle
} from "interface";

interface IProps {
	cards: {
		cards: ICard[],
		addCard: IAddCard,
		deleteCard: IDeleteCard,
		changeCard: IChangeCard,
	},
	columns: {
		columns: IColumn[],
		editColumnTitle: IEditColumnTitle

	},
	comments: {
		comments: IComment[],
		addComment: IAddComment,
		changeComment: IChangeComment,
		deleteComment: IDeleteComment
	}
}

function Columns({cards, columns, comments}: IProps) {
	return (
		<Flex>
			{
				columns.columns.map(column => <Column key={column.id} cards={cards}
				                                      editColumnTitle={columns.editColumnTitle}
				                                      comments={comments} column={column}/>)
			}
		</Flex>
	)
}

export default Columns