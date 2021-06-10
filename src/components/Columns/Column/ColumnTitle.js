import React, {useEffect, useState} from "react";
import styles from "../Columns.module.css";

function ColumnTitle({editColumnTitle, columnTitle, id}) {

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

    const onTitleChange = (e) => {
        setTitle(e.target.value);
    }

    return (
        <div>
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