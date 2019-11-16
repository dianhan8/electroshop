import { createLogger } from 'redux-logger'
import promise from 'redux-promise-middleware'

const middleware =[]

if(__DEV__){
    middleware.push(createLogger())
}

middleware.push(promise)

export default middleware