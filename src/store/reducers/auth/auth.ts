import { IStateAuth, Actions, ActionsType } from "./types";


const initialState: IStateAuth = {
   user: null,
   isAuth: false,
   isInitialized: false,
   isInitializing: false,
   isLoginFetch: false,
   loginError: null,
   error: null
}

export const authReducer = (state = initialState, action: ActionsType): IStateAuth => {
   switch (action.type) {
      case Actions.SET_USER_SUCCESS:
         return {
            ...state,
            user: action.payload,
            isInitialized: true,
            isInitializing: false,
            error: null,
            isAuth: true
         }

      case Actions.SET_USER_ERROR:
         return {
            ...state,
            isInitialized: true,
            error: action.payload,
            isInitializing: false,
            isAuth: false
         }

      case Actions.LOGOUT_USER:
         return {
            ...state,
            user: null,
            error: null,
            isAuth: false
         }

      case Actions.FETCH_USER:
         return {
            ...state,
            isInitializing: true
         }

      case Actions.FETCH_LOGIN:
         return {
            ...state,
            isLoginFetch: true
         }

      case Actions.SET_LOGIN_SUCCESS:
         return {
            ...state,
            isLoginFetch: false,
            user: action.payload,
            loginError: null,
            isAuth: true
         }

      case Actions.SET_LOGIN_ERROR:
         return {
            ...state,
            isLoginFetch: false,
            loginError: action.payload,
            isAuth: false
         }

      default:
         return state;
   }
}