import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

import Header from "./Header";
import Drawer from "./Drawer";
import Ticket from "./Ticket";

const customStyles = {
  content: {
    maxWidth: "720px",
    margin: "0 auto",
    overflow: "inherit",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    padding: "0"
  }
};

class Dashboard extends React.Component {
  state = {
    showModal: false,
    data: null,
    loading: false,
    errors: null,
    currentTicket: null
  };

  setTicket = id => {
    this.setState({ currentTicket: id, showModal: true });
  };

  setData = data => {
    this.setState({ data });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="dashboard">
        <Drawer
          data={data}
          setData={this.setData}
          currentTicket={this.state.currentTicket}
          setTicket={this.setTicket}
          fetchListings={this.fetchListings}
        />
        <Modal
          ariaHideApp={false}
          id="the-react-modal"
          isOpen={this.state.showModal}
          shouldCloseOnOverlayClick={true}
          style={customStyles}
          onRequestClose={() => {
            this.setState({ showModal: false });
          }}
        >
          <div className="modal-header">
            <span
              className="modal-close"
              onClick={() => this.setState({ showModal: false })}
            >
              {"🔙"}
            </span>
          </div>
          <div className="banner" />
          <Ticket currentTicket={this.state.currentTicket} data={data} />
        </Modal>
      </div>
    );
  }
}

export default Dashboard;
