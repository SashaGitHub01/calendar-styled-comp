import { IStateEvents, Actions, ActionsType } from "./types";


const initialState: IStateEvents = {
   events: [],
   isFetching: false,
   error: null,
   isCreating: false,
   createError: null,
   isRemoving: false,
   removeError: null
}

export const eventsReducer = (state = initialState, action: ActionsType): IStateEvents => {
   switch (action.type) {
      case Actions.SET_EVENTS_SUCCESS:
         return {
            ...state,
            events: action.payload,
            isFetching: false,
            error: null
         }

      case Actions.SET_EVENTS_ERROR:
         return {
            ...state,
            error: action.payload,
            isFetching: false
         }

      case Actions.FETCH_EVENTS:
         return {
            ...state,
            isFetching: true
         }

      case Actions.FETCH_CREATE:
         return {
            ...state,
            isCreating: true
         }

      case Actions.CREATE_ERROR:
         return {
            ...state,
            isCreating: false,
            createError: action.payload,
         }

      case Actions.CREATE_SUCCESS:
         return {
            ...state,
            isCreating: false,
            createError: null,
            events: [...state.events, action.payload]
         }

      case Actions.FETCH_REMOVE:
         return {
            ...state,
            isRemoving: true,
         }

      case Actions.REMOVE_ERROR:
         return {
            ...state,
            isRemoving: false,
            removeError: action.payload
         }

      case Actions.REMOVE_SUCCESS:
         return {
            ...state,
            isRemoving: false,
            removeError: null,
            events: state.events.filter(({ id }) => id !== action.payload)
         }

      default:
         return state;
   }
}