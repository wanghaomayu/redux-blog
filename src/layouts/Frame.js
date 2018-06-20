import React, {Component} from 'react';
import Nav from './Nav'

class Frame extends Component {
  render() {
    return (
      <div className="frame">
        <section>
          <Nav/>
        </section>
        <section className="container">
          {this.props.children}
        </section>
      </div>
    )
  }
}

export default Frame;
// *上面的this.props.children实际上是react-router的路由，结合路由组件的设计(回想一下，嵌套路由的关系)