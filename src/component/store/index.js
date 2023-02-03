import { combineReducers,createStore } from 'redux';
import { todoReducer } from "./todoReducers";


export default createStore(
    combineReducers({
        todos: todoReducer,
        filter: (state = 0 ,action)=>state
    })
)

