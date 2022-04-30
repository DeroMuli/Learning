import { combineReducers } from "redux"
import TicketsReducer from './TicketsReducer'
import ProfileReducer from './ProfileReducer'
const rootreducer = combineReducers({Ticket : TicketsReducer , Profile : ProfileReducer})
export default rootreducer