import React, {useState} from 'react'
import '../../../modal.css'
import "./CardChange.css";

function CardChange({id, cardTitle, cardContent, changeCard, setIsOpen}) {
    let [titleEditMode, setTitleEditMode] = useState(false);
    let [contentEditMode, setContentEditMode] = useState(false);
    let [title, setTitle] = useState(cardTitle);
    let [content, setContent] = useState(cardContent);

    const activateEditMode = (value) => {
        (value === 'title')? setTitleEditMode(true):setContentEditMode(true)
    }

    const deactivateEditMode = (value) => {
        (value === 'title')? setTitleEditMode(false):setContentEditMode(false)
    }

    const onTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const onContentChange = (e) => {
        setContent(e.target.value);
    }

    const onSubmit = () => {
        changeCard(id, title, content)
        setIsOpen(false)
    }

    return (
        <div>
             <div className='modal'>
                <div className='modal__body'>
                    <div className={'modal__header'}>
                        <button className={'cross'} onClick={() => setIsOpen(false)}>X
                        </button>
                    </div>
                    <div className="modal__content">
                        <div>
                            {!titleEditMode &&
                            <div className={'text text-title'}>
                                <span onDoubleClick={activateEditMode.bind(null, 'title')}>{title || "Card title"}</span>
                            </div>
                            }
                            {titleEditMode &&
                            <div>
                                <input onChange={onTitleChange}
                                       autoFocus={true}
                                       className={'edit edit__title'}
                                       value={title}
                                       onBlur={deactivateEditMode.bind(null, 'title')}/>
                            </div>
                            }
                        </div>

                        <div>
                            {!contentEditMode &&
                            <div className={'text text-content'}>
                                <span onDoubleClick={activateEditMode.bind(null, 'content')}>{content || "Card content"}</span>
                            </div>
                            }
                            {contentEditMode &&
                            <div>
                                <textarea onChange={onContentChange}
                                       autoFocus={true}
                                       className={'edit edit__content'}
                                       value={content}
                                       onBlur={deactivateEditMode.bind(null, 'content')}/>
                            </div>
                            }
                        </div>
                        <button onClick={onSubmit}>Ok</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CardChange