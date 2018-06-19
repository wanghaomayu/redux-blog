import {combineReducers} from 'redux';

//  引入reducer以及action
import listReducers, {loadArticles} from '../components/Home/PreviewListRedux';

export default combineReducers({  // 这个redux的api -> combineReducers，能将返回的一堆reducers整合成一个
  listReducers
});

export const actions = {
  loadArticles
};