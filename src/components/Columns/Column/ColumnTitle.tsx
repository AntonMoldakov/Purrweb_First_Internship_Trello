import React, {useState} from "react";
import {TitleH4, Input} from "ui";
import {IEditColumnTitle} from "interface";

interface IProps {
    editColumnTitle: IEditColumnTitle,
    columnTitle: string,
    id: number
}

function ColumnTitle({editColumnTitle, columnTitle, id}:IProps) {

    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(columnTitle);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        editColumnTitle(id, title);
    }

    const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    return (
        <div >
            {!editMode &&
            <div>
                <TitleH4 onClick={activateEditMode} $cursor={'pointer'} >{columnTitle || "Column title"}</TitleH4>
            </div>
            }

            {editMode &&
            <div>
                <Input onChange={onTitleChange}
                       autoFocus={true}
                       value={title}
                       onBlur={deactivateEditMode}/>
            </div>
            }
        </div>
    );

}

export default ColumnTitle;