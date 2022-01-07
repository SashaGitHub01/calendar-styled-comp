import { IEvent } from "../../../models/IEvent";

export enum Actions {
   SET_EVENTS_SUCCESS = 'events/SET_EVETNS_SUCCESS',
   SET_EVENTS_ERROR = 'events/SET_EVENTS_ERROR',
   FETCH_EVENTS = 'events/FETCH_USER',
   FETCH_CREATE = 'events/FETCH_CREATE',
   CREATE_SUCCESS = 'events/CREATE_SUCCESS',
   CREATE_ERROR = 'events/CREATE_ERROR',
   FETCH_REMOVE = 'events/FETCH_REMOVE',
   REMOVE_SUCCESS = 'events/REMOVE_SUCCESS',
   REMOVE_ERROR = 'events/REMOVE_ERROR'
}

export interface IStateEvents {
   events: IEvent[],
   isFetching: boolean,
   error: string | null,
   isCreating: boolean,
   createError: null | string,
   isRemoving: boolean,
   removeError: null | string
}

//get events
export interface IsetEventsErr {
   type: Actions.SET_EVENTS_ERROR,
   payload: string
}

export interface IsetEventsSuccess {
   type: Actions.SET_EVENTS_SUCCESS,
   payload: IEvent[]
}

export interface IfetchEvents {
   type: Actions.FETCH_EVENTS,
}

//create event
export interface IfetchCreate {
   type: Actions.FETCH_CREATE,
}

export interface IcreateSuccess {
   type: Actions.CREATE_SUCCESS,
   payload: IEvent
}

export interface IcreateError {
   type: Actions.CREATE_ERROR,
   payload: string
}

//remove event
export interface IfetchRemove {
   type: Actions.FETCH_REMOVE,
}

export interface IremoveSuccess {
   type: Actions.REMOVE_SUCCESS,
   payload: string
}

export interface IremoveError {
   type: Actions.REMOVE_ERROR,
   payload: string
}

export type ActionsType = IsetEventsErr
   | IsetEventsSuccess
   | IfetchEvents
   | IfetchCreate
   | IcreateSuccess
   | IcreateError
   | IfetchRemove
   | IremoveSuccess
   | IremoveError