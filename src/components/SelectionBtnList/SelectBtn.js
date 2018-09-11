import React from 'react';
import globalBus from './../../actions/globalBus';

export default function SelectBtn (props) {
        const {paramsObj} = props;

        const nameParam = paramsObj.name;

        function btnClickFunction() {
            globalBus().resultBox.print(nameParam);
        }

        return (
          <button onClick={btnClickFunction}>
              {nameParam}
          </button>
        );
}
