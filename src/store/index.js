import thunk from "redux-thunk";
import cReducer from "./reducer";

const { createStore, compose, applyMiddleware } = require("redux");

// 集成devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// 再将中间件的操作包裹在composeEnhancer中。
const enhancer=composeEnhancers(applyMiddleware(thunk))
const store=createStore(cReducer,enhancer);
export default store