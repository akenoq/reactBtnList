import React from 'react';
import AddingForm from './AddingForm';
import BtnList from './SelectionBtnList/BtnList';
import ResultBox from "./ResultBox";

export default class PageContent extends React.Component {

    render() {
        return (
            <div>
                <AddingForm/>
                <BtnList/>
                <ResultBox/>
            </div>
        );
    }

}