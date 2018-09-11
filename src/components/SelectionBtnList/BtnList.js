import React from 'react';
import globalBus from './../../actions/globalBus';
import SelectBtn from "./SelectBtn";

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
        this.setState({array: updArr});
    }

    // рендерить массив <SelectBtn>
    render() {
        // массив с разметкой
        // let arr = this.state.array.map((elem, index) => {
        //     let aName = elem.name;
        //     return <SelectBtn key={index} name={aName}/>
        // });
        return (
            <div>
                {this.state.array.map((a) => <SelectBtn key={a.id} name={a.name}/>)}
            </div>
        );
    }
}
