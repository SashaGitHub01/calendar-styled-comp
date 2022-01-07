import { IUser } from "../../../models/IUser";

export enum Actions {
   SET_USER_ERROR = 'auth/SET_USER_ERROR',
   SET_USER_SUCCESS = 'auth/SET_USER_SUCCESS',
   FETCH_USER = 'auth/FETCH_USER',
   FETCH_LOGIN = 'auth/FETCH_LOGIN',
   SET_LOGIN_ERROR = 'auth/SET_LOGIN_ERROR',
   SET_LOGIN_SUCCESS = 'auth/SET_LOGIN_SUCCESS',
   LOGOUT_USER = 'auth/LOGOUT_USER'
}

export interface IStateAuth {
   user: IUser | null,
   isInitialized: boolean,
   isInitializing: boolean,
   isAuth: boolean,
   error: string | null,
   isLoginFetch: boolean,
   loginError: string | null,
}

// authorization
export interface IsetUserErr {
   type: Actions.SET_USER_ERROR,
   payload: string
}

export interface IsetUserSuccess {
   type: Actions.SET_USER_SUCCESS,
   payload: IUser
}

export interface IfetchUser {
   type: Actions.FETCH_USER,
}

export interface IlogoutUser {
   type: Actions.LOGOUT_USER,
}


//login
export interface IsetLoginSuccess {
   type: Actions.SET_LOGIN_SUCCESS,
   payload: IUser
}

export interface IsetLoginErr {
   type: Actions.SET_LOGIN_ERROR,
   payload: string
}

export interface IfetchLogin {
   type: Actions.FETCH_LOGIN,
}

export type ActionsType = IsetUserErr
   | IsetUserSuccess
   | IfetchUser
   | IlogoutUser
   | IsetLoginSuccess
   | IsetLoginErr
   | IfetchLogin