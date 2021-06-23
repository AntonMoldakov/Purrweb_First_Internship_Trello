import actions from "./actions";

const ChangeColumn = (id: number, columnTitle: string) => (dispatch: any) => {
	let Column = {
		id,
		columnTitle,
	}

	// @ts-ignore
	dispatch(actions.changeColumn(Column))
}

export default {ChangeColumn};