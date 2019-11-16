import { combineReducers } from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'

//Navigation
import Navigation from './../../component/Navigation'

//Reducers
import reducersUsers from './reducersUsers'
import reducersProduct from './reducersProduct'

const state = {
    cart: []
}

const reducerRouter = createNavigationReducer(Navigation)

const appReducers = combineReducers({
    router: reducerRouter,
    users: reducersUsers,
    product: reducersProduct,
    cart: state
})

export default appReducers