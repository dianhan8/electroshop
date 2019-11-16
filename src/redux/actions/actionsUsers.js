import * as types from './../types'
import axios from 'axios';

export const handleLogin = (params) => ({
    type: types.LOGIN,
    payload : axios({
        method: 'POST',
        url: '',
        data: {
            email: params.email,
            password: params.password
        }
    })
})

export const handleRegister = (params) => ({
    type: types.REGISTER,
    payload: axios({
        method: 'POST',
        url: '',
        data: {
            name: params.name,
            email: params.email,
            password: params.password,
            phone_number: params.phone_number
        }
    })
})