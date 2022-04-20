import * as actions from './ActionTypes'

export function bugAdded(description){
    return {
        type : actions.Bugs_Added,
        payload : {
            description
        }
    }
}

export function bugRemoved(id){
    return {
        type : actions.Bugs_Removed,
        payload : {
            id 
        }
    }
}

export function resolveBug(id){
    return {
        type : actions.Bugs_Resolved,
        payload : {
            id
        }
    }
}