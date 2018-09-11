import React from 'react';
import globalBus from './../../actions/globalBus';
import SelectBtn from "./SelectBtn";

let idCounter = 0;

export default class BtnList extends React.Component {

    constructor(props) {
        super(props);

        globalBus().btnList = this;

        this.onAddName = this.onAddName.bind(this);
        this.state = {array: []};
    }

    onAddName(name) {
        let updArr = [];
        let arrayLen = this.state.array.length;

        for (let i = 0; i < arrayLen; i++) {
            updArr.push({
                id: this.state.array[i].id,
                name: this.state.array[i].name
            })
        }

        updArr.push({
            id: arrayLen,
            name: name
        });

        // clear textField content
        globalBus().formNameSpace.clearTextField();

        this.setState({array: updArr});
    }

    // рендерить массив <SelectBtn>
    render() {
        let arr = this.state.array.map((elem, index) => {
             idCounter++;
             let aName = elem.name;
             return <SelectBtn key={"my_arr_" + idCounter} paramsObj={{name: aName}}/>
        });

        return (
            <div>
                {arr}
            </div>
        );
    }
}
