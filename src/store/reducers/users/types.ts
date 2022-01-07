import { IUser } from "../../../models/IUser";

export enum Actions {
   FETCH_USERS = 'users/FETCH_USERS',
   SET_USERS_SUCCESS = 'users/SET_USERS_SUCCESS',
   SET_USERS_ERROR = 'users/SET_USERS_ERROR',
}

export interface IStateUsers {
   users: IUser[],
   isFetching: boolean,
   error: null | string
}

export interface IsetUsersErr {
   type: Actions.SET_USERS_ERROR,
   payload: string
}

export interface IsetUsersSuccess {
   type: Actions.SET_USERS_SUCCESS,
   payload: IUser[]
}

export interface IfetchUsers {
   type: Actions.FETCH_USERS,
}

export type ActionTypes = IsetUsersErr
   | IsetUsersSuccess
   | IfetchUsers