import { IUser } from "../../models/IUser";
import { Actions, IfetchUsers, IsetUsersErr, IsetUsersSuccess } from "../reducers/users/types";

export const fetchingUsers = (): IfetchUsers => (
   { type: Actions.FETCH_USERS }
)

export const setUsersSuccess = (users: IUser[]): IsetUsersSuccess => (
   { type: Actions.SET_USERS_SUCCESS, payload: users }
)

export const setUsersError = (err: string): IsetUsersErr => (
   { type: Actions.SET_USERS_ERROR, payload: err }
)