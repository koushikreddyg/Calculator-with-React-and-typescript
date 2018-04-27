import * as React from 'react';
import './App.css';

interface CounterProps {
  incname: string;
  decname: string;
  funtot: (value: number) => void;
}

interface CounterState {
  counter: number;
}

class Counter extends React.Component<CounterProps, CounterState> {
    constructor(props: CounterProps) {
        super(props);
        this.state = { counter : 0};
    }

    incriment = () => {
     this.setState({ counter : this.state.counter + 1});
     this.props.funtot(1);
    }
    decriment = () => {
        this.setState({counter : this.state.counter - 1});
        this.props.funtot(-1);
    }
    render() {
      return (
          <div>
              <button className="button1" onClick={this.incriment}>{this.props.incname}</button>
              <b className="counter1">{this.state.counter}</b>
              <button className="button2" onClick={this.decriment}>{this.props.decname}</button>
          </div>
      ); }
    }
export default Counter;