import React, { Component } from 'react';

class Counter1 extends Component {
  state = { 
    count: 0
   }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() { 
    return ( 
      <React.Fragment>
        <div>Count: {this.state.count}</div>
        <button onClick={this.increaseCount}>Increase</button>
      </React.Fragment>
     );
  }
}
 
export default Counter1;