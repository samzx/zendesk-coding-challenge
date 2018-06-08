import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import Header from './components/Header';
import Drawer from './components/Drawer';
import Desk from './components/Desk';

const url = 'http://localhost:8081';
const tickets = '/tickets';
const comments = '/comments'

class App extends React.Component {
    state = {
        data: null,
        loading: true,
        errors: null,
    }

    componentDidMount() {
        fetch(url + tickets, {
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
        const {data, errors, loading} = this.state;
        return (
            <div className="app">
                <Header loading={loading} errors={errors} />
                {
                    errors && <p>{errors}</p>
                }
                { 
                    loading &&
                    <div className="loading" >
                        <p>{"Loading..."}</p> 
                    </div>
                }
                <div className="dashboard">
                    <Drawer data={data} />
                    <Desk />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
