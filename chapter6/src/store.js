import { createStore } from "redux";
import  userReducer from "./Reducers/UsersReducer";

const store = createStore(userReducer)

export default store

