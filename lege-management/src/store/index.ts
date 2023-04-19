import { legacy_createStore, combineReducers,compose, applyMiddleware } from 'redux'
import reduxThunk from "redux-thunk"
import NumStatus from './NumStatus/reducer'
import ArrStatus from './ArrStatus/reducer'
const reducers = combineReducers({
   NumStatus,
   ArrStatus
})

// 创建数据仓库
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 为了让浏览器正常使用redux-dev-tools插件
// const store = legacy_createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose //rt
const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))

export default store
