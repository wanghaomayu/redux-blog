import React, {Component} from 'react';
import Preview from './Preview'

class PreviewList extends Component {
  render() {
    return this.props.articleList.map(item => (
      <Preview {...item} key={item.id}/>
    ))
  }
}