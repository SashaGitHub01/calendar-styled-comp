import { Dispatch } from "redux";
import { AuthService } from "../../API/AuthService";
import { ILoginBody } from "../../API/requests/ILoginBody";
import { fetchingLogin, fetchUser, setLoginSuccess, setLoginErr, setUserErr, setUserSuccess, logoutUser } from "../actions/authActions";
import { ActionsType } from "../reducers/auth/types";

//auth
export const fetchAuth = () => {
   return async (dispatch: Dispatch<ActionsType>) => {
      try {
         dispatch(fetchUser());

         const res = await AuthService.auth();

         dispatch(setUserSuccess(res));

      } catch (err) {
         dispatch(setUserErr('Ошибка'))
      }
   }
}

//login
export const fetchLogin = (body: ILoginBody) => {
   return async (dispatch: Dispatch<ActionsType>) => {
      try {
         dispatch(fetchingLogin());

         const res = await AuthService.login(body);

         if (res) {
            dispatch(setLoginSuccess(res));
         } else {
            dispatch(setLoginErr('Ошибка'))
         }

      } catch (err) {
         dispatch(setLoginErr('Ошибка'))
      }
   }
}

export const fetchLogout = () => {
   return async (dispatch: Dispatch<ActionsType>) => {
      try {
         await AuthService.logout();

         dispatch(logoutUser());

      } catch (err) {
         console.log(err)
      }
   }
}