import React from 'react'
import Columns from "./components/Columns/Columns";
import Auth from "./components/Auth/Auth";

function App() {
    const [userName, setUserName] = React.useState('Guest')
    const [cards, setCards] = React.useState([
        {id: 1, columnId: 1, cardTitle: 'Card 1', cardContent: 'fdsfsd fsd fsd fsd fsd fsdff', author: 'Anton'},
        {id: 2, columnId: 1, cardTitle: 'Card 1', cardContent: 'fdsfsd fsfsd fsdff', author: 'Anton'},
        {id: 3, columnId: 2, cardTitle: 'Card 2', cardContent: 'fdsfsd fsd dasdfsd fsd fsd fsdff', author: 'Gleb'},
        {id: 4, columnId: 3, cardTitle: 'Card 3', cardContent: 'fdsffsd fsd fsd fsdff', author: 'Arthur'}
    ])
    const [columns, setColumns] = React.useState([
        {id: 1, columnTitle: 'TODO'},
        {id: 2, columnTitle: 'In Progress'},
        {id: 3, columnTitle: 'Testing'},
        {id: 4, columnTitle: 'Done'}
    ])

    // const [loading, setLoading] = React.useState(true)

    function addColumn(columnTitle) {
        setColumns(columns.concat([{
            id: cards.length + 1,
            columnTitle,
        }]))
    }

    function addCard(columnId, cardTitle, cardContent) {
        setCards(cards.concat([{
            id: new Date(),
            columnId,
            cardTitle,
            cardContent,
            author: userName
        }]))
    }

    function deleteCard(id) {
        setCards(cards.filter(card => card.id !== id))
    }

    function editColumnTitle(id, title) {
        setColumns(columns.map(column => {
            if (column.id === id) {
                column.columnTitle = title
            }
            return column
        }))
    }

    function userNameChange(userName) {
        setUserName(userName)
    }

    return (
        <div className='wrapper'>
            <Auth userNameChange={userNameChange}/>
            <h1>TrelloCopy</h1>
            <Columns cards={cards} columns={columns}
                     addColumn={addColumn} editColumnTitle={editColumnTitle}
                     addCard={addCard} deleteCard={deleteCard}/>

        </div>
    )
}

export default App;