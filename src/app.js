import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

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
        loading: false,
        errors: null,
        currentTicket: null,
        currentPage: 0,
        comments: null,
        showModal: false,
        loadingComments: false,
    }

    setTicket = (id) => {
        this.setState({currentTicket: id, showModal: true});
    }

    setComments = (comments) => {
        this.setState({comments});
    }

    fetchListings = (page) => {
        if(this.state.loading || this.state.currentPage === page) return;
        this.setState({ currentPage: page, loading: true });
        fetch(url + tickets + `/${page}`, {
            method: 'GET',
        })
        .then((res) => {
            if(res.ok) {
                console.log(res);
                return res.json();
            } else {
                throw res;
            }
        })
        .then((json) => {
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
                        currentTicket={this.state.currentTicket}
                        setTicket={this.setTicket}
                        setComments={this.setComments}
                        fetchListings={this.fetchListings}
                    />
                    <Modal
                    isOpen={this.state.showModal}
                    shouldCloseOnOverlayClick={true}
                    onRequestClose={() => {
                        this.setState({showModal: false});
                        this.setComments(null);
                    }}
                    ariaHideApp={false}
                    >
                        <Desk
                            currentTicket={this.state.currentTicket}
                            comments={this.state.comments}
                            data={data}
                        />
                    </Modal>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
