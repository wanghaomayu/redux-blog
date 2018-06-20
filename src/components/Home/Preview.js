import React, {Component} from 'react';
import './Preview.css';

class Preview extends Component {

  handleNavigate(id, e) {
    // 阻止原生链接跳转执行，比如a上面期望执行该函数，但是点击会有默认的超链接事件，react中阻止的就是这类默认事件
    e.preventDefault();

    this.props.push(id);
  }

  render() {
    return (
      <article className="article-preview-item">
        <h1 className="title">
          <a href={`/detail/${this.props.id}`} onClick={this.handleNavigate.bind(this,this.props.id)}>
            {this.props.title}
          </a>
        </h1>
        <span className="date">{this.props.date}</span>
        <p className="desc">{this.props.description}</p>
      </article>
    )
  }
}

export default Preview;