import * as types from '../constants/ActionTypes'
const initialstate = []
let id = 1
export default function tickets(state = initialstate , action){
    switch(action.type){
        case types.ADD_TICKET :
            return [
                ...state,
                action.payload
            ]
        case types.DELETE_TICKET:{
            return state.filter( user => user._id != action.payload.id )
        }
        case types.GET_TICKETS:
            return [...action.payload]
        default :
            return state
    }
}