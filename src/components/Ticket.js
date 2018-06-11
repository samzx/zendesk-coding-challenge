import React from "react";

import Details from "./Details";

const Ticket = props => {
  return (
    <div className="ticket">
      <div className="ticket--heading">
        <h2>Details</h2>
      </div>
      <Details currentTicket={props.currentTicket} data={props.data} />
    </div>
  );
};

export default Ticket;
