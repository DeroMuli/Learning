import * as types from '../constants/ActionTypes'
let initialuser = {
    first_name : 'Musembi' ,
    last_name : 'Muli' ,
    joining_date : '2021-04-28'
}

export default function profile(state = initialuser , action){
    switch(action.type){
        case  types.Change_Profile :
            return {
                first_name : action.payload.first_name ,
                last_name : action.payload.last_name ,
                joining_date : action.payload.joining_date
            }
        default :
            return state
    }
}