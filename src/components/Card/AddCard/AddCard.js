import React, {useState} from 'react'
import './AddCard.css'

function AddCard({id}) {
    const [newCard, setNewCard] = useState({columnId: id, cardTitle: '', cardContent: ''})
    const [isOpen, setIsOpen] = useState(false)

    // function submitHandler(event) {
    //     event.preventDefault()
    //     if (input.value.trim()) {
    //         auth(input.value)
    //     } else {
    //         addCard(newCard)
    //     }
    //     input.clear()
    //     setIsOpen(false)
    // }

    return (
        <React.Fragment>
            <button onClick={() => setIsOpen(true)}>Add card</button>
            {isOpen && <div className='modal'>
                <div className='modal__body'>
                    <div className={'modal__header'}>
                        <button className={'cross'} onClick={() => {

                            setIsOpen(false)
                        }}>X</button>
                    </div>
                    <div className="modal__content">
                    <h1>create new card</h1>
                    <form style={{marginBottom: '1rem'}}>
                        <input/>
                        <button type='submit'>create</button>
                    </form>
                    </div>
                </div>
            </div>}
        </React.Fragment>

    )
}


export default AddCard