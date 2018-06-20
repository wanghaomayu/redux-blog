import React, {Component} from 'react';
import Preview from './Preview'

class PreviewList extends Component {
  componentDidMount() {
    this.props.loadArticles();
  }

  // componentWillUpdate(){
  //   console.log(this.props.articleList.loading);
  // }

  render() {
    const {loading, error, articleList} = this.props.articleList;
    if (error) {
      return <p>Error!</p>
    }
    if (loading) {
      return <p>Loading...</p>
    }
    return (
      <div>
        {articleList ? articleList.map(item => (
          <Preview {...item} key={item.id} push = {this.props.push} id={item.id}/>
        )) : null}
      </div>
    )
  }
}

export default PreviewList;