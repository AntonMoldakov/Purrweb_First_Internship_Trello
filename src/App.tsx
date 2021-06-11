import React, {useState, FC} from 'react'
import Columns from "./components/Columns/Columns";
import Auth from "./components/Auth/Auth";

function App() {
    const [userName, setUserName] = useState<string>('Guest')
    const [cards, setCards] = useState([
        {id: 1, columnId: 1, cardTitle: 'Card 1', cardContent: 'fdsfsd fsd fsd fsd fsd fsdff', author: 'Anton'},
        {id: 2, columnId: 1, cardTitle: 'Card 1', cardContent: 'fdsfsd fsfsd fsdff', author: 'Anton'},
        {id: 3, columnId: 2, cardTitle: 'Card 2', cardContent: 'fdsfsd fsd dasdfsd fsd fsd fsdff', author: 'Gleb'},
        {id: 4, columnId: 3, cardTitle: 'Card 3', cardContent: 'fdsffsd fsd fsd fsdff', author: 'Arthur'}
    ])
    const [columns, setColumns] = useState([
        {id: 1, columnTitle: 'TODO'},
        {id: 2, columnTitle: 'In Progress'},
        {id: 3, columnTitle: 'Testing'},
        {id: 4, columnTitle: 'Done'}
    ])

    // const [loading, setLoading] = React.useState(true)

    function addColumn(columnTitle: string) {
        setColumns(columns.concat([{
            id: cards.length + 1,
            columnTitle,
        }]))
    }

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

    return (
        <div className='wrapper'>
            <Auth userNameChange={userNameChange}/>
            <h1>TrelloCopy</h1>
            <Columns cards={cards} columns={columns}
                     addColumn={addColumn} editColumnTitle={editColumnTitle}
                     addCard={addCard} deleteCard={deleteCard} changeCard={changeCard}/>

        </div>
    )
}

export default App;
