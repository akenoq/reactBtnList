import React from 'react';
import globalBus from './../../actions/globalBus';

// можно сделать функцией
export default class SelectBtn extends React.Component {

    render() {
        return (
          <button onClick={globalBus().resultBox.print(this.props.name)}>
              {this.props.name}
          </button>
        );
    }
}
