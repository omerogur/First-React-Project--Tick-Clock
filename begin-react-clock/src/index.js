import React from 'react';
import ReactDOM from 'react-dom';


//test
class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {time : new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.counter(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  counter(){
    console.log("test")
    this.setState({
      time:new Date()
    });
  }
   render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.time.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);