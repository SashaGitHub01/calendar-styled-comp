import moment from "moment";
import { Moment } from "moment";
import { IEvent } from "../models/IEvent";
import { formatDate } from "./formatDate";

export const rules = {
   required: () => ({
      required: true,
      message: 'Обязательное поле'
   }),

   length: (min: number, max: number) => ({
      min: min || 0,
      max: max || 150,
      message: `Поле должно содержать от ${min} до ${max} символов`
   }),

   correctDate: (events: IEvent[]) => ({
      validator(_: any, val: Moment) {
         const nowDate = new Date().toDateString()
         const isInvalid = val?.isBefore(
            (moment(nowDate))
         );

         const isIncludes = events.find(({ date }) => date == formatDate(val))

         if (isInvalid || isIncludes) return Promise.reject(new Error('Некорректная дата'))

         return Promise.resolve();
      }
   })
}