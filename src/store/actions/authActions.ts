import { IUser } from "../../models/IUser";
import {
   Actions, IfetchUser, IsetUserErr, IsetUserSuccess, IlogoutUser, IsetLoginSuccess, IsetLoginErr, IfetchLogin
} from "../reducers/auth/types";

// auth
export const fetchUser = (): IfetchUser => (
   { type: Actions.FETCH_USER }
)

export const setUserSuccess = (user: IUser): IsetUserSuccess => (
   { type: Actions.SET_USER_SUCCESS, payload: user }
)

export const setUserErr = (err: string): IsetUserErr => (
   { type: Actions.SET_USER_ERROR, payload: err }
)

export const logoutUser = (): IlogoutUser => (
   { type: Actions.LOGOUT_USER }
)

//login
export const fetchingLogin = (): IfetchLogin => (
   { type: Actions.FETCH_LOGIN }
)

export const setLoginSuccess = (user: IUser): IsetLoginSuccess => (
   { type: Actions.SET_LOGIN_SUCCESS, payload: user }
)

export const setLoginErr = (err: string): IsetLoginErr => (
   { type: Actions.SET_LOGIN_ERROR, payload: err }
)