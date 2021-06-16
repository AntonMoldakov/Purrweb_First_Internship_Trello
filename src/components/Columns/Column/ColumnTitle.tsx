import React, {useState} from "react";
import styles from "../Columns.module.css";
import TitleH4 from "../../../style/TitleH4";
import Input from "../../../style/Input";

interface StandardComponentProps {
    editColumnTitle: any
    columnTitle: string
    id: number
}

function ColumnTitle({editColumnTitle, columnTitle, id}:StandardComponentProps) {

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
                <TitleH4 onClick={activateEditMode} cursor={'pointer'} >{columnTitle || "Column title"}</TitleH4>
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