import { createStore } from "redux";
import allreducers from './Reducers/allreducers'

const store = createStore(allreducers)

export default store

