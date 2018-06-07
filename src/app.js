import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const url = 'http://localhost:8081/';

class App extends React.Component {
    state = {
        data: null
    }

    componentDidMount() {
        fetch(url, {
            method: 'GET',
        })
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            console.log(json);
            this.setState({ data: json });
        })
        .catch((e) => {
            console.log(e);
        });
    }

    render() {
        return (
            <div>
                <h1>Hello world</h1>
                {
                    this.state.data ? JSON.stringify(this.state.data) : "Loading..."
                }
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
