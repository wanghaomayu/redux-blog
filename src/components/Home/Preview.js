import React, {Component} from 'react';
import './Preview.css';

class Preview extends Component{
  render(){
    return (
      <article className="article-preview-item">
        <h1 className="title">{this.props.title}</h1>
        <span className="date">{this.props.date}</span>
        <p className="desc">{this.props.description}</p>
      </article>
    )
  }
}

export default Preview;