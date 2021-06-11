import React, {ReactEventHandler, useEffect, useState} from "react";
import styles from "../Columns.module.css";

interface StandardComponentProps {
    editColumnTitle: any
    columnTitle: string
    id: number
}

function ColumnTitle({editColumnTitle, columnTitle, id}:StandardComponentProps) {

    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(columnTitle);

    // useEffect(() => {
    //     setTitle(columnTitle);
    // }, [columnTitle]);

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
        <div className={styles.column__title}>
            {!editMode &&
            <div className={styles.column__title}>
                <span onDoubleClick={activateEditMode} >{columnTitle || "Column title"}</span>
            </div>
            }

            {editMode &&
            <div>
                <input onChange={onTitleChange}
                       autoFocus={true}
                       className={styles.ColumnTitle}
                       value={title}
                       onBlur={deactivateEditMode}/>
            </div>
            }
        </div>
    );

}

export default ColumnTitle;