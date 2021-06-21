import React, {useEffect, useState} from 'react'
import Columns from "./components/Columns/Columns";
import Auth from "./components/Auth/Auth";
import {Wrapper} from "./ui/index";



function App() {
    const [userName, setUserName] = useState('Guest')
    const [cards, setCards] = useState([
        {id: 80, columnId: 0, cardTitle: '', cardContent: '', author: ''}
    ])
    const [comments, setComments] = useState([
        {id: 80, cardId: 80, message: '', author: ''}
    ])
    const [columns, setColumns] = useState([
        {id: 1, columnTitle: 'TODO'},
        {id: 2, columnTitle: 'In Progress'},
        {id: 3, columnTitle: 'Testing'},
        {id: 4, columnTitle: 'Done'}
    ])

    useEffect(() => {
        let comments = JSON.parse(localStorage.getItem("comments") as string)
        if (comments) {
            setComments(comments)
        }

        let columns = JSON.parse(localStorage.getItem("columns") as string)
        if (!columns || columns.length !== 4) {
            columns = [
                {id: 1, columnTitle: 'TODO'},
                {id: 2, columnTitle: 'In Progress'},
                {id: 3, columnTitle: 'Testing'},
                {id: 4, columnTitle: 'Done'}
            ]
        }
        setColumns(columns)
        let cards = JSON.parse(localStorage.getItem("cards") as string)
        if (cards) {
            setCards(cards)
        }
    }, [])


    function addCard(columnId: number, cardTitle: string, cardContent: string) {
        let newCards = cards.concat([{
            id: +(new Date()),
            columnId,
            cardTitle,
            cardContent,
            author: userName
        }])
        setCards(newCards)
        localStorage.setItem("cards", JSON.stringify(newCards))
    }

    function changeCard(id: number, cardTitle: string, cardContent: string) {
        let newCards = cards.map(card => {
            if (card.id === id) {
                card.cardTitle = cardTitle
                card.cardContent = cardContent
            }
            return card
        })
        setCards(newCards)
        localStorage.setItem("cards", JSON.stringify(newCards))
    }

    function deleteCard(id: number) {
        let newCards = cards.filter(card => card.id !== id)
        setCards(newCards)
        localStorage.setItem("cards", JSON.stringify(newCards))
    }

    function editColumnTitle(id: number, title: string) {
        let newColumns = columns.map(column => {
            if (column.id === id) {
                column.columnTitle = title
            }
            return column
        })
        setColumns(newColumns)
        localStorage.setItem("columns", JSON.stringify(newColumns))
    }


    function userNameChange(userName: string): void {
        setUserName(userName)
    }

    function addComment(id: number, message: string) {
        let newComments = [{
            id: +(new Date()),
            cardId: id,
            message,
            author: userName
        }].concat(comments)
        setComments(newComments)
        localStorage.setItem("comments", JSON.stringify(newComments))
    }

    function changeComment(id: number, message: string) {
        let newComments = comments.map(comment => {
            if (comment.id === id) {
                comment.message = message
            }
            return comment
        })
        setComments(newComments)
        localStorage.setItem("comments", JSON.stringify(newComments))
    }

    function deleteComment(id: number) {
        let newComments = comments.filter(comment => comment.id !== id)
        setComments(newComments)
        localStorage.setItem("comments", JSON.stringify(newComments))
    }

    return (
        <Wrapper>
            <Auth userNameChange={userNameChange}/>
            <h1>TrelloCopy</h1>
            <Columns cards={{cards, addCard, deleteCard, changeCard}}
                     columns={{columns, editColumnTitle}}
                     comments={{addComment, changeComment, deleteComment, comments}}/>

        </Wrapper>
    )
}

export default App;
