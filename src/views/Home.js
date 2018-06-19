import React, {Component} from 'react';
import PreviewList from '../components/Home/PreviewList';
import {actions} from './HomeRedux';
import {bindActionCreators} from 'redux';  // bindActionCreators能将dispatch和actionCreator绑定在一起
import {connect} from 'react-redux';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <PreviewList
          {...this.props.list}
          {...this.props.listActions}
        />
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      articleList: state.home.articleList  //  把store整棵树的一个子树赋值给list，以供其传给UI组件使用
    }
  },
  (dispatch) => {
    return {
      listActions: bindActionCreators(actions, dispatch)  //  将对应的actions和dispatch绑定
    }
  }
)(Home);