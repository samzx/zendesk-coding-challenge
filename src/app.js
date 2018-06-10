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

const customStyles = {
    content : {
        maxWidth: '720px',
        margin: '0 auto',
        overflow: 'inherit',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        padding: '0',
    }
  };

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
                        style={customStyles}
                        id="the-react-modal"
                        isOpen={this.state.showModal}
                        shouldCloseOnOverlayClick={true}
                        onRequestClose={() => {
                            this.setState({showModal: false});
                        }}
                        ariaHideApp={false}
                    >
                        <div className="modal-header" >
                            <span
                                className="modal-close"
                                onClick={() => this.setState({showModal: false})}
                            >
                                {'🔙'}
                            </span>
                            </div>
                        <div className="banner" />
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
