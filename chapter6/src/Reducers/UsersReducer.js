import * as types from '../constants/ActionTypes'
const initialstate = [
    {
        id : 1 ,
        name : "Harmeet Singh"
    },
    {
        id : 2 ,
        name : "Mehul Bhatt"
    },
    {
        id : 3 ,
        name : "NayanJyotiTalukdar"
    }
]
export default function users(state = initialstate , action){
    switch(action.type){
        case types.ADD_USER :
            return [
                ...state,
                {
                    id : initialstate[initialstate.length - 1].id + 1 ,
                    name : action.payload.name
                }
            ]
        case types.DELETE_USER:
            return state.filter( user => user.id != action.payload.id )  
        default :
            return state
    }
}