import { IUser } from '../models/IUser';
import { instance } from './instance';
import { ILoginBody } from './requests/ILoginBody';
import { IResponse } from './response/IResponse';

export class AuthService {
   static login = async (body: ILoginBody): Promise<IUser | undefined> => {
      const res = await instance.post<IResponse<IUser>>('/users/login', body);

      return res.data.data;
   }

   static auth = async (): Promise<IUser> => {
      const res = await instance.get<IResponse<IUser>>('/users/auth');

      return res.data.data;
   }

   static logout = async (): Promise<any> => {
      const res = await instance.get<IResponse<any>>('/users/logout');

      return res.data.data;
   }
}