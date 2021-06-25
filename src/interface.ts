export interface ICard {
	id: number,
	columnId: number,
	columnTitle: string,
	cardTitle: string,
	cardContent: string,
	author: string
}

export type IAddCard = (columnId: number, columnTitle: string, cardTitle: string, cardContent: string) => void
export type IDeleteCard = (id: number) => void
export type IChangeCard = (id: number, cardTitle: string, cardContent: string) => void


export interface IComment {
	id: number,
	cardId: number,
	message: string,
	author: string
}

export type IAddComment = (cardId: number, message: string) => void
export type IDeleteComment = (id: number) => void
export type IChangeComment = (id: number, message: string) => void

export interface IColumn {
	id: number,
	columnTitle: string
}

export type IEditColumnTitle = (id: number, title: string) => void

