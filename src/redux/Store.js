import {createStore} from 'redux'
import {reducerFunction} from './Reducers'

const store = createStore(reducerFunction,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store