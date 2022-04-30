import * as types from '../constants/ActionTypes' 
export function changeprofile(first_name,last_name,joining_date){
    return {
        type : types.Change_Profile ,
        payload : {
            first_name,
            last_name,
            joining_date
        }
    }
}