import actions from "./actions";
import {Dispatch} from "redux";

const ChangeColumn = (id: number, columnTitle: string) => (dispatch: Dispatch) => {
	let Column = {
		id,
		columnTitle,
	}

	dispatch(actions.changeColumn(Column))
}

const operations = {ChangeColumn}
export default operations