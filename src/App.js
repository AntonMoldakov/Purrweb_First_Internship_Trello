import React, {useEffect} from 'react'
import Context from "./Context"
import Loader from "./Loader";
import Columns from "./components/Columns/Columns";

function App() {
    const [userName, setUserName] = React.useState('Guest')
    const [cards, setCards] = React.useState([
        {columnId: 1, cardTitle: 'Card 1', cardContent: 'fdsfsd fsd fsd fsd fsd fsdff', author: 'Anton'},
        {columnId: 1, cardTitle: 'Card 1', cardContent: 'fdsfsd fsfsd fsdff', author: 'Anton'},
        {columnId: 2, cardTitle: 'Card 2', cardContent: 'fdsfsd fsd dasdfsd fsd fsd fsdff', author: 'Gleb'},
        {columnId: 3, cardTitle: 'Card 3', cardContent: 'fdsffsd fsd fsd fsdff', author: 'Arthur'}
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

    function addCard({columnId, cardTitle, cardContent}) {
        setCards(cards.concat([{
            columnId: cards.length + 1,
            cardTitle,
            cardContent,
            author: userName
        }]))
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
            <h1>TrelloCopy</h1>
            {cards.length ? <Columns cards={cards} columns={columns} addColumn={addColumn} editColumnTitle={editColumnTitle}/> : <Loader/>}
        </div>
    )
}

export default App;
