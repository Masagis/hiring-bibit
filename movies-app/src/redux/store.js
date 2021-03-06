import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

const globalStore = createStore(rootReducer, applyMiddleware(thunk))

export default globalStore
