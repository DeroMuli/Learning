import { createStore } from "redux";
import  ticketReducer from "./Reducers/TicketsReducer";

const store = createStore(ticketReducer)

export default store

