import React from 'react';
import globalBus from './../actions/globalBus';

export default class ResultBox extends React.Component {

    constructor(props) {
        super(props);

        globalBus().resultBox = this;

        this.state = {result: "EMPTY"};
    }

    print(name) {
        this.setState({result: name});
    }

    render() {
        return (
            <h1>
                {this.state.result}
            </h1>
        );
    }
}
