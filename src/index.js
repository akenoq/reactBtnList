import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import './timerSimple'

// import Timer from './timer/Timer.js'
//
// function getAllContent() {
//     return (
//         <div>
//             <Timer/>
//         </div>
//     )
// }

import PageContent from './components/PageContent'

function getAllContent() {
    return (
        <div>
            <PageContent/>
        </div>
    )
}

ReactDOM.render(
    getAllContent(),
    document.getElementById("root")
);
