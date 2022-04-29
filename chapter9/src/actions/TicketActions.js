import * as types from '../constants/ActionTypes'

export function addTicket(email,department,issuetype,message,date){
    return {
        type : types.ADD_TICKET ,
        payload : {
            email ,
            department ,
            issuetype ,
            message ,
            date 
        }
    }
}

export function deleteTicket(id){
    return {
        type : types.DELETE_TICKET ,
        payload : {
            id
        }
    }
}