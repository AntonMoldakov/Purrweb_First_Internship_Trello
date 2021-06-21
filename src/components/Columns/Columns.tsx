import React from 'react'
import Column from "./Column/Column"
import {Flex} from "../../ui/index";

interface IProps {
    cards: {
        cards: { id: number, columnId: number, cardTitle: string, cardContent: string, author: string }[],
        addCard: (columnId: number, cardTitle: string, cardContent: string) => void,
        deleteCard: (id: number) => void,
        changeCard: (id: number, cardTitle: string, cardContent: string) => void,
    },
    columns: {
        columns: { id: number, columnTitle: string }[]
        editColumnTitle: (id: number, title: string) => void

    },
    comments: {
        comments: { id: number, cardId: number, message: string, author: string }[]
        addComment: (id: number, message: string) => void,
        changeComment: (id: number, message: string) => void,
        deleteComment: (id: number) => void
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