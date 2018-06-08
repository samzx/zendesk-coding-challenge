import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import Table from './components/Table';

const url = 'http://localhost:8081/';

class App extends React.Component {
    state = {
        data: null,
        loading: true,
        errors: null
    }

    componentDidMount() {
        fetch(url, {
            method: 'GET',
        })
        .then((res) => {
            console.log(res);
            if(res.ok) {
                return res.json();
            } else {
                throw res.statusText;
            }
        })
        .then((json) => {
            this.setState({ data: json, loading: false });
            console.log(Object.keys(json.tickets[0]));
        })
        .catch((e) => {
            this.setState({ errors: e, loading: false });
            console.log(e);
        });
    }

    render() {
        return (
            <div>
                <h1>Zendesk Dashboard</h1>
                {
                    this.state.errors && <p>{this.state.erros}</p>
                }
                {this.state.loading && <p>{"Loading..."}</p>}
                {
                    this.state.data &&
                    <Table data={this.state.data.tickets} />
                }
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
