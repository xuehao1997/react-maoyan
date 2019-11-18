import { createStore , applyMiddleware } from 'redux';
import rootReducer from './../recuders/index'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
//store通过reducer创建了初始状态
const store = createStore( rootReducer , composeWithDevTools(applyMiddleware( thunk )));

export default store;