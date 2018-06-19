// 完成store的配置
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {routerReducer} from 'react-router-redux';

import ThunkMiddleWare from 'redux-thunk';
import rootReducer from './reducers';
// 引入请求middleware的工厂方法
import createFetchMiddleware from 'redux-composable-fetch';

// 创建一个请求middleware的实例
const FetchMiddleware = createFetchMiddleware();

// 为了得到一个 能够解析包括异步请求的action 的createStore
const finalCreateStore = compose(
  applyMiddleware(ThunkMiddleWare,
    // 将请求middleware注入store增强器中
    FetchMiddleware)
)(createStore);


// 为了得到能将路由状态和store统一数据的reducer
const reducer = combineReducers(Object.assign({}, rootReducer, {
  routing: routerReducer
}));

//  导出这个经过配置的createStore,即：得到一个"能处理异步action并且包含router状态的"createStore()函数
export default function configStore(initialState) {
  // const newStore = initialState ? finalCreateStore(reducer, initialState) : finalCreateStore(reducer, {});
  const newStore = finalCreateStore(reducer, initialState);
  return newStore;
}