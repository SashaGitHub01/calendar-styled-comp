import { Dispatch } from "redux"
import {
   fetchingCreate, fetchingEvents, setEventsError, setEventsSuccess, createSuccess, createError, fetchingRemove, removeSuccess, removeError
} from "../actions/eventsActions"
import { ActionsType } from "../reducers/events/types"
import { EventService } from "../../API/EventsService";
import { IEventBody } from "../../API/requests/IEventBody";

//get
export const fetchEvents = () => {
   return async (dispatch: Dispatch<ActionsType>) => {
      try {
         dispatch(fetchingEvents());

         const res = await EventService.getAll();

         dispatch(setEventsSuccess(res));

      } catch (err) {
         dispatch(setEventsError('Ошибка'))
      }
   }
}

//create
export const fetchCreate = (body: IEventBody) => {
   return async (dispatch: Dispatch<ActionsType>) => {
      try {
         dispatch(fetchingCreate());

         const res = await EventService.create(body);

         dispatch(createSuccess(res));

      } catch (err) {
         dispatch(createError('Ошибка'))
      }
   }
}

//remove
export const fetchRemove = (id: string) => {
   return async (dispatch: Dispatch<ActionsType>) => {
      try {
         dispatch(fetchingRemove());

         await EventService.delete(id);

         dispatch(removeSuccess(id));

      } catch (err) {
         dispatch(removeError('Ошибка'))
      }
   }
}