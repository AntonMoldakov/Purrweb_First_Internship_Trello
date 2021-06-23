import type from "./types";

const Auth = (userName: string) => ({
	type: type.AUTH,
	userName: userName ? userName : 'Guest'
})

const actions = {Auth}
export default actions
