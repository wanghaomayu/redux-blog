import React, {Component} from 'react';
import PreviewList from '../components/Home/PreviewList';
import {actions} from './HomeRedux';
import {bindActionCreators} from 'redux';  // bindActionCreators能将dispatch和actionCreator绑定在一起
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

class Home extends Component {
  render() {
    // const {articleList, loadArticles, push} = this.props;
    return (
      <div>
        <h1>Home</h1>
        <PreviewList
          {...this.props}
        />
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      articleList: state.home.listReducers  //  把store整棵树的一个子树赋值给articleList，以供其传给UI组件使用
    }
  },
  (dispatch) => {
    return {
      loadArticles: bindActionCreators(actions.loadArticles, dispatch),  //  将actions对象里面的loadArticles和dispatch绑定
      push: bindActionCreators(push, dispatch)
    }
  }
)(Home);