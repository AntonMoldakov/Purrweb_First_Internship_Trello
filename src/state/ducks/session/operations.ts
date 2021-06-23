import actions from "./actions";

const Auth = (userName: string) => (dispatch: any) => {
	dispatch(actions.Auth(userName))
}

export default {Auth};