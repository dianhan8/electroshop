import * as types from './../types'

const initialState = {
    isLoading: true,
    request: null,
    users: []
}

export default function reducersUsers(state = initialState, action){
    switch(action.type){
        case `${types.LOGIN}_PENDING`:
            return {
                ...state,
                isLoading: true
            }
        case `${types.LOGIN}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                users: action.payload.data,
                request: action.payload.data.status
            }
        case `${types.LOGIN}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                request: action.payload.data.status
            }
        default :
            return state
        }
}