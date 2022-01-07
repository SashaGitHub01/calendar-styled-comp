import { IEvent } from "../../models/IEvent";
import { Actions, IcreateError, IcreateSuccess, IfetchCreate, IfetchEvents, IfetchRemove, IremoveError, IremoveSuccess, IsetEventsErr, IsetEventsSuccess } from "../reducers/events/types";

export const fetchingEvents = (): IfetchEvents => (
   { type: Actions.FETCH_EVENTS }
)

export const setEventsSuccess = (events: IEvent[]): IsetEventsSuccess => (
   { type: Actions.SET_EVENTS_SUCCESS, payload: events }
)

export const setEventsError = (err: string): IsetEventsErr => (
   { type: Actions.SET_EVENTS_ERROR, payload: err }
)

//create 
export const fetchingCreate = (): IfetchCreate => (
   { type: Actions.FETCH_CREATE }
)

export const createSuccess = (event: IEvent): IcreateSuccess => (
   { type: Actions.CREATE_SUCCESS, payload: event }
)

export const createError = (err: string): IcreateError => (
   { type: Actions.CREATE_ERROR, payload: err }
)


//remove
export const fetchingRemove = (): IfetchRemove => (
   { type: Actions.FETCH_REMOVE }
)

export const removeSuccess = (id: string): IremoveSuccess => (
   { type: Actions.REMOVE_SUCCESS, payload: id }
)

export const removeError = (err: string): IremoveError => (
   { type: Actions.REMOVE_ERROR, payload: err }
)