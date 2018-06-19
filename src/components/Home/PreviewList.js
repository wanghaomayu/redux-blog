import React, {Component} from 'react';
import Preview from './Preview'

class PreviewList extends Component {
  componentDidMount() {
    this.props.listActions();
    // console.log(this.props.loading);
  }

  render() {
    const {loading, error, articleList} = this.props;
    if (error) {
      return <p>Error!</p>
    }
    if (loading) {
      return <p>Loading...</p>
    }
    return (
      <div>
        {articleList.map(item => (
          <Preview {...item} key={item.id}/>
        ))}
      </div>
    )
  }
}

export default PreviewList;