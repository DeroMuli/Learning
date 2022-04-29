import * as types from '../constants/ActionTypes'
const initialstate = [
    {
        id : 0 ,
        email : 'musembimuli1999@gmail.com',
        department : 'IT' ,
        issuetype : 'Email Related Issue' ,
        message : 'Hiiiiii' ,
        date : '21/04/2022'
    }
]
let id = 1
export default function tickets(state = initialstate , action){
    switch(action.type){
        case types.ADD_TICKET :
            return [
                ...state,
                {
                    id : id++ ,
                    email : action.payload.email ,
                    department : action.payload.department ,
                    issuetype : action.payload.issuetype ,
                    message : action.payload.message ,
                    date : action.payload.date
                }
            ]
        case types.DELETE_TICKET:
            return state.filter( user => user.id != action.payload.id )  
        default :
            return state
    }
}