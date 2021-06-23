import type from "./types";

interface IColumn {
    id: number,
    columnTitle: number
}


const changeColumn = (column: IColumn) => ({
    type: type.CHANGE,
    column
})


// @ts-ignore
export default {changeColumn};
