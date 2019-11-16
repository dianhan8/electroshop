import * as types from './../types'
import axios from 'axios'
import { URL } from '../../component/Host'

export const handleGetProduct = () => ({
    type: types.GET_PRODUCT,
    payload: axios({
        method: 'GET',
        url: `${URL}/products`
    })
})

export const handleGetDetailsProduct = (id) => ({
    type: types.DETAILS_PRODUCT,
    payload: axios({
        method: 'GET',
        url: `${URL}/product/${id}`
    })
})

export const handleAddToCart = (params) => ({
    type: types.ADD_CART,
    payload: params
})