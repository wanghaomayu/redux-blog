import React, {Component} from 'react';
import './Preview.css';

class Preview extends Component {

  handleNavigate(id, e) {
    // 阻止原生链接跳转执行，比如a上面期望执行该函数，但是点击会有默认的超链接事件，react中阻止的就是这类默认事件
    e.preventDefault();

    this.props.push(`/detail/${id}`);  // 之前是因为push到的路由应该是对应"路由文件设定的路径"，
    // 因为store中监控着router这个state，所以跳到对应路由之后，react会重新挂载对应组件包括render
  }

  render() {
    return (
      <article className="article-preview-item">
        <h1 className="title">
          <a href={`/detail/${this.props.id}`} onClick={this.handleNavigate.bind(this, this.props.id)}>
            {this.props.title}
          </a>
        </h1>
        <span className="date">{this.props.date}</span>
        <p className="desc">{this.props.description}</p>
        <div style={{width: "100%", height: 10, backgroundColor: "green"}} />
      </article>
    )
  }
}

export default Preview;