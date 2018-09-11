import React from 'react';
import globalBus from './../../actions/globalBus';

export default function SelectBtn (props) {
        const {paramsObj} = props;

        const nameParam = paramsObj.name;

        return (
          <button onClick={globalBus().resultBox.print(nameParam)}>
              {nameParam}
          </button>
        );
}
