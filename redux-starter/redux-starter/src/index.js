import store from "./store"
import * as actiooncreators from './actions'
store.subscribe(() => {
    console.log("Changes happened")
    console.log(store.getState())
})
store.dispatch(actiooncreators.bugAdded("Bug1"))
store.dispatch(actiooncreators.resolveBug(1))