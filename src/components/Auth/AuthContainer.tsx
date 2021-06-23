import React from 'react'
import {useDispatch} from "react-redux";
import { sessionOperations } from 'state/ducks/session';
import Auth from "./Auth";

function AuthContainer() {
	const dispatch = useDispatch()

	const userNameChange = (name: string) => {
		dispatch(sessionOperations.Auth(name))
	}

	return <Auth userNameChange={userNameChange}/>

}


export default AuthContainer