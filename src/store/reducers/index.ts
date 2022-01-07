import { authReducer } from "./auth/auth";
import { eventsReducer } from "./events/events";
import { usersReducer } from "./users/users";

export const reducer = {
   auth: authReducer,
   events: eventsReducer,
   users: usersReducer
}