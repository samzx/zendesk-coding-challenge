import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import Header from './components/Header';
import Drawer from './components/Drawer';
import Ticket from './components/Ticket';

export const url = 'http://localhost:8081';
export const tickets = '/tickets';
export const comments = '/comments';

class App extends React.Component {
    state = {
        showModal: false,
        data: null,
        loading: false,
        errors: null,
        currentTicket: null,
    }

    setTicket = (id) => {
        this.setState({currentTicket: id, showModal: true});
    }

    setData = (data) => {
        this.setState({data});
    }

    render() {
        const {data} = this.state;
        return (
            <div className="app">
                <Header />
                <div className="dashboard">
                    <Drawer
                        data={data}
                        setData={this.setData}
                        currentTicket={this.state.currentTicket}
                        setTicket={this.setTicket}
                        fetchListings={this.fetchListings}
                    />
                    <Modal
                        isOpen={this.state.showModal}
                        shouldCloseOnOverlayClick={true}
                        onRequestClose={() => {
                            this.setState({showModal: false});
                        }}
                        ariaHideApp={false}
                    >
                        <Ticket
                            currentTicket={this.state.currentTicket}
                            data={data}
                        />
                    </Modal>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
