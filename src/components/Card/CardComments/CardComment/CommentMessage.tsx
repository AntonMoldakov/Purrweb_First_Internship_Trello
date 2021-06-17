import React, {useState} from "react";
import {TextArea} from "../../../../ui/index";

interface StandardComponentProps {
    changeComment: (id: number, message: string) => void
    message: string
    id: number
}

function CommentMessage({changeComment, message, id}:StandardComponentProps) {

    let [editMode, setEditMode] = useState(false);
    let [mess, setMess] = useState(message);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        if(mess.trim() !== '') {
        changeComment(id, mess);
        setEditMode(false);
        }
    }

    const onTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMess(e.target.value);
    }

    return (
        <div >
            {!editMode &&
            <div>
                <div onClick={activateEditMode}>{mess}</div>
            </div>
            }

            {editMode &&
            <div>
                <TextArea onChange={onTitleChange}
                       autoFocus={true}
                       value={mess}
                       onBlur={deactivateEditMode}/>
            </div>
            }
        </div>
    );

}

export default CommentMessage;