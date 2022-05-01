import { type } from '@testing-library/user-event/dist/type'
import * as types from '../constants/ActionTypes'

export function addTicket(ticket){
    return {
        type : types.ADD_TICKET ,
        payload : ticket
    }
}

export function getTickets(tickets){
    return {
        type : types.GET_TICKETS ,
        payload : tickets
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