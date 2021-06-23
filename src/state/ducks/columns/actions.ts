import {IColumn} from "interface";
import type from "./types";

const changeColumn = (column: IColumn) => ({
	type: type.CHANGE,
	column
})

const actions = {changeColumn}
export default actions
