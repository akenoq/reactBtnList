import React from 'react';
import ReactDOM from 'react-dom';

export default class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 0};
    }

    render() {
        const value = this.state.value;
        return (
            <div>
                <h1>Hello!</h1>
                <b>time = {value}</b>
            </div>
        );
    }

    increment() {
        // лучше так
        // let newTime = this.state.value + 1
        this.setState({value: this.state.value + 1});
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.increment(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }
}
