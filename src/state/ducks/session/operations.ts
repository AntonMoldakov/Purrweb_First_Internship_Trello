import {Dispatch} from "redux";
import {authA} from "./reducers";

const Auth = (userName: string) => (dispatch: Dispatch) => {
	dispatch(authA(userName))
}

const operations = {Auth}

export default operations