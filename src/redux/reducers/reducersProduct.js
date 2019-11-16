import * as types from './../types'

const initialState = {
    isLoading: true,
    request: null,
    product: [],
    cart: []
}

export default function reducersProduct(state = initialState, action) {
    switch (action.type) {
        case `${types.GET_PRODUCT}_PENDING`:
            return {
                ...state,
                isLoading: true,
            }
        case `${types.GET_PRODUCT}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                product: Object.values(action.payload.data),
                request: action.payload.status,
            }
        case `${types.GET_PRODUCT}_REJECTED`:
            return {
                ...state,
                isLoading: false,
                request: action.payload.data.status
            }
        case `${types.ADD_CART}`:
            return {
                ...state,
                cart: action.payload
            }
        default:
            return state
    }
}
