import { createStore } from 'redux';
import user from './reducer/user.js';

export default createStore(user,
window.__REDUX_DEVTOOLS_EXTENSION__ && window
.__REDUX_DEVTOOLS_EXTENSION__());