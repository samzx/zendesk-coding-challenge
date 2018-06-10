import React from "react";

import Details from "./Details";

class Ticket extends React.Component {
  state = {
    errors: null,
    loading: false
  };

  render() {
    return (
      <div className="ticket">
        <div className="ticket--heading">
          <h2>Ticket Details</h2>
        </div>
        <Details
          currentTicket={this.props.currentTicket}
          data={this.props.data}
        />
      </div>
    );
  }
}

export default Ticket;
