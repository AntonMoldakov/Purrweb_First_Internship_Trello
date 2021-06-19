import React, {useState} from 'react'
import Columns from "./components/Columns/Columns";
import Auth from "./components/Auth/Auth";
import {Wrapper} from "./ui/index";

function App() {

    const [userName, setUserName] = useState('Guest')
    const [cards, setCards] = useState([
        {id: 1, columnId: 1, cardTitle: 'Card 1', cardContent: 'fdsfsd fsd fsd fsd fsd fsdff', author: 'Anton'},
        {id: 2, columnId: 1, cardTitle: 'Card 1', cardContent: 'fdsfsd fsfsd fsdff', author: 'Anton'},
        {id: 3, columnId: 2, cardTitle: 'Card 2', cardContent: 'fdsfsd fsd dasdfsd fsd fsd fsdff', author: 'Gleb'},
        {id: 4, columnId: 3, cardTitle: 'Card 3', cardContent: 'fdsffsd fsd fsd fsdff', author: 'Arthur'}
    ])
    const [comments, setComments] = useState([
        {id: 124, cardId: 1, message: 'hhahahaahhah', author: 'Anton'},
        {id: 12234, cardId: 1, message: 'hhh ok', author: 'Gleb'},
        {id: 14, cardId: 2, message: 'hhahah  ffffhah', author: 'Beb'}
    ])
    const [columns, setColumns] = useState([
        {id: 1, columnTitle: 'TODO'},
        {id: 2, columnTitle: 'In Progress'},
        {id: 3, columnTitle: 'Testing'},
        {id: 4, columnTitle: 'Done'}
    ])
    //
    // useEffect(()=> {
    //     localStorage.state={cards, comments, columns}
    // }, [cards, comments, columns])


    function addCard(columnId: number, cardTitle: string, cardContent: string) {
        setCards(cards.concat([{
            id: +(new Date()),
            columnId,
            cardTitle,
            cardContent,
            author: userName
        }]))
    }

    function changeCard(id: number, cardTitle: string, cardContent: string) {
        setCards(cards.map(card => {
            if(card.id === id) {
                card.cardTitle = cardTitle
                card.cardContent = cardContent
            }
            return card
        }))
    }

    function deleteCard(id: number) {
        setCards(cards.filter(card => card.id !== id))
    }

    function editColumnTitle(id: number, title: string) {
        setColumns(columns.map(column => {
            if (column.id === id) {
                column.columnTitle = title
            }
            return column
        }))
    }


    function userNameChange(userName: string): void {
        setUserName(userName)
    }

    function addComment(id: number, message: string) {
        setComments([{
            id: +(new Date()),
            cardId: id,
            message,
            author: userName
        }].concat(comments))
    }

    function changeComment(id: number, message: string) {
        setComments(comments.map(comment => {
            if(comment.id === id) {
                comment.message = message
            }
            return comment
        }))
    }

    function deleteComment(id: number) {
        setComments(comments.filter(comment => comment.id !== id))
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
