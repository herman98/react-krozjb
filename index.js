import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Test extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      sample_data_1: 'Herman'
    };
  }

  render() {
    return (
      <div>
        <Hello name={ this.state.name + ' and ' + this.state.sample_data_1 }/>
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
ReactDOM.render(<Test />, document.getElementById('second-root'));
