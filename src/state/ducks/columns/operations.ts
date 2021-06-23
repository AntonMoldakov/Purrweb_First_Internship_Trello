import {Dispatch} from "redux";
import {changeColumnA} from "./reducers";

const ChangeColumn = (id: number, columnTitle: string) => (dispatch: Dispatch) => {
	let Column = {
		id,
		columnTitle,
	}

	dispatch(changeColumnA(Column))
}

const operations = {ChangeColumn}
export default operations