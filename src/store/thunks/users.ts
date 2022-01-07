import { Dispatch } from "redux"
import { UsersService } from "../../API/UsersService"
import { fetchingUsers, setUsersError, setUsersSuccess } from "../actions/usersActions"
import { ActionTypes } from "../reducers/users/types"

export const fetchUsers = () => {
   return async (dispatch: Dispatch<ActionTypes>) => {
      try {
         dispatch(fetchingUsers());

         const res = await UsersService.getAll();

         dispatch(setUsersSuccess(res))

      } catch (err) {
         dispatch(setUsersError('Ошибка'))
      }
   }
}