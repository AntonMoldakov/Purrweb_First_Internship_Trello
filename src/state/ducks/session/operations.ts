import actions from "./actions";
import {Dispatch} from "redux";

const Auth = (userName: string) => (dispatch: Dispatch) => {
	dispatch(actions.Auth(userName))
}

const operations = {Auth}

export default operations