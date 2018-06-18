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