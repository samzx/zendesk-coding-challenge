import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import Header from './components/Header';
import Drawer from './components/Drawer';
import Desk from './components/Desk';

export const url = 'http://localhost:8081';
export const tickets = '/tickets';
export const comments = '/comments'

class App extends React.Component {
    state = {
        data: null,
        loading: true,
        errors: null,
        currentTicket: null,
        currentPage: 1,
        comments: null,
        loadingComments: false,
    }

    setTicket = (id) => {
        this.setState({currentTicket: id});
    }

    setComments = (comments) => {
        this.setState({comments});
    }

    setPage = (currentPage) => {
        this.setState({currentPage});
    }

    fetchListings = (page) => {
        fetch(url + tickets + `/${this.state.currentPage}`, {
            method: 'GET',
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            } else {
                throw res;
            }
        })
        .then((json) => {
            console.log(json);
            this.setState({ data: json, loading: false });
        })
        .catch((e) => {
            this.setState({ errors: `${e.status} ${e.statusText}`, loading: false });
            console.log(e);
        });
    }

    componentDidMount() {
        this.fetchListings(1);
    }

    render() {
        const {data, errors, loading} = this.state;
        return (
            <div className="app">
                <Header loading={loading} errors={errors} />
                {
                    errors && <p className="loading" >{errors}</p>
                }
                { 
                    loading &&
                    <div className="loading" >
                        <p>{"Loading..."}</p> 
                    </div>
                }
                <div className="dashboard">
                    <Drawer
                        data={data}
                        currentPage={this.state.currentPage}
                        setTicket={this.setTicket}
                        setComments={this.setComments}
                        setPage={this.setPage}
                        fetchListings={this.fetchListings}
                    />
                    <Desk
                        currentTicket={this.state.currentTicket}
                        comments={this.state.comments}
                        data={data}
                    />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
