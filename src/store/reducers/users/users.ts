import { IStateUsers, Actions, ActionTypes } from "./types";


const initialState: IStateUsers = {
   users: [],
   isFetching: false,
   error: null,
}

export const usersReducer = (state = initialState, action: ActionTypes): IStateUsers => {
   switch (action.type) {
      case Actions.SET_USERS_SUCCESS:
         return {
            ...state,
            users: action.payload,
            isFetching: false,
            error: null
         }

      case Actions.SET_USERS_ERROR:
         return {
            ...state,
            isFetching: false,
            error: action.payload
         }

      case Actions.FETCH_USERS:
         return {
            ...state,
            isFetching: true,
         }

      default:
         return state;
   }
}