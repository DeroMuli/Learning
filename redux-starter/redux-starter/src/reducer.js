import * as actions from './ActionTypes'
let id = 0
export default function(state = [], action){
    if(action.type === actions.Bugs_Added){
        return [
            ...state ,
            {
                id : ++id,
                description : action.payload.description ,
                resolved : false
            }
        ]
    }
    else if(action.type === actions.Bugs_Removed){
        return state.filter( bug => bug.id !== action.payload.id)
    }
    else if(action.type === actions.Bugs_Resolved){
        return state.map(bug => {
            if(bug.id === action.payload.id){
                return {...bug, resolved : true}
            }
            return bug
        })
    }
    else
        return state
}