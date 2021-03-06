import React from 'react';
import globalBus from './../actions/globalBus';

export default class ResultBox extends React.Component {

    constructor(props) {
        super(props);

        globalBus().resultBox = this;

        this.state = {result: "EMPTY"};
    }

    print(name) {
        console.log("PRINT TEXT: " + name);
        this.setState({result: name});
    }

    render() {
        const resultStr = this.state.result;

        return (
            <h1>
                {resultStr}
            </h1>
        );
    }
}
