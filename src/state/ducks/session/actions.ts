import type from "./types";

const Auth = (userName: string) => ({
	type: type.AUTH,
	userName: userName? userName: 'Guest'
})
// @ts-ignore
export default {Auth};
