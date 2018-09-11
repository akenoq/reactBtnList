import React from 'react';
import globalBus from './../actions/globalBus';

// import AddingInput from './AddingForm/AddingInput';
// import AddingBtn from './AddingForm/AddingBtn';

export default class AddingForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ""};

        globalBus().formNameSpace = this;
    }

    onSubmit = (event) => {
        alert(`${this.state.value}, added!`);
        event.preventDefault();
        globalBus().btnList.onAddName(this.state.value);
    };

    onValueChange = (event) => {
        this.setState({value: event.target.value});
    };

    /**
     * clear content of textField
     */
    clearTextField() {
        this.setState({value: ""});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label> Введите имя:
                    <input type="text" name="name" onChange={this.onValueChange}/>
                </label>
                <input id="addBtn" type="submit" value="Add"/>
            </form>
        );
    }
}