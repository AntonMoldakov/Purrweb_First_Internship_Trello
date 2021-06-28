import React, {useMemo} from "react";
import {Field, Form} from "react-final-form";
import {Button, TitleH2, Flex, Error, Footer, FormItem} from "ui";
import {ICard} from "interface";
import {Comments} from 'components';
import {cardsOperations} from "state/ducks/cards";
import {useDispatch} from "react-redux";
import {commentOperations} from "state/ducks/comments";
import {AppDispatch} from "state/store";

const required = (v: string) => (!v || v.trim() === '') ? 'required' : undefined


interface IProps {
	cards: ICard[],
	cardId: number,
	userName: string
}

function CardChange({cards, cardId, userName}: IProps) {
	const dispatch = useDispatch<AppDispatch>()

	const filteredCards = useMemo(() =>
		() =>
			cards.filter(card => card.id === cardId), [cards, cardId])

	const [card] = filteredCards()

	function changeCard(id: number, cardTitle: string, cardContent: string) {
		dispatch(cardsOperations.ChangeCard(id, cardTitle, cardContent))
	}

	function addComment(cardId: number, message: string, userName: string) {
		dispatch(commentOperations.AddComment(cardId, message, userName))
	}

	const onSubmitCard = (values: { title: string, text: string }) => {
		changeCard(cardId, values.title, values.text)
	}

	const SendComment = (values: { comment: string }) => {
		addComment(cardId, values.comment, userName)
	}

	return (
		<div>
			<TitleH2>{card.columnTitle}</TitleH2>
			<Form
				onSubmit={onSubmitCard}
				render={({handleSubmit}) => (
					<form onSubmit={handleSubmit}>
						<FormItem>
							<Field name={'title'} validate={required} defaultValue={card.cardTitle}>
								{({input, meta}) => (
									<Flex>
										<input className={'form__field'}  {...input} type="title" placeholder="title"/>
										{meta.error && meta.touched && <Error>{meta.error}</Error>}
									</Flex>
								)}
							</Field>
						</FormItem>
						<FormItem>
							<Field className={'form__field textarea'} name={'text'} component={'textarea'}
							       placeholder={'text'} defaultValue={card.cardContent}/>
						</FormItem>
						<Footer>
							<div>{card.author}</div>
							<Button type="submit">Save</Button>
						</Footer>

					</form>
				)}
			/>
			<hr/>
			<Form
				onSubmit={SendComment}
				render={({handleSubmit}) => (
					<form onSubmit={handleSubmit}>
						<TitleH2>Comments</TitleH2>
						<Flex>
							<FormItem>
								<Field className={'form__field textarea'} name={'comment'}
								       component={'textarea'} placeholder={'comment'} validate={required}/>
							</FormItem>
							<Button type="submit">Send</Button>
						</Flex>
					</form>
				)}
			/>
			<div>
				<Comments cardId={cardId}/>
			</div>
		</div>
	)
}

export default CardChange
