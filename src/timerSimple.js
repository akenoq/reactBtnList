let time = 0;
let elem = {};

function timerRender() {
    elem = (
        <div>
            <h1>Hello!</h1>
            <b>time = {time}</b>
        </div>
    );
    ReactDOM.render(
        elem, document.getElementById('root')
    );
    time++;
}

setInterval(timerRender, 1000);
