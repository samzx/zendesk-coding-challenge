import React from "react";

import Listing from "./Listing";
import { listingsPerPage } from "../constants/constants";

class List extends React.Component {
  scrollToTop = () => {
    this._listDiv.scrollTop = 0;
  };

  generateList = tickets => {
    return tickets.map((listing, index) => (
      <Listing
        listing={listing}
        id={listing.id}
        index={index}
        key={`listing-${index}`}
        currentTicket={this.props.currentTicket}
        setTicket={this.props.setTicket}
        loading={this.props.loading}
      />
    ));
  };

  render() {
    return (
      <div className="list" ref={ref => (this._listDiv = ref)}>
        {this.props.data && this.generateList(this.props.data.tickets)}
      </div>
    );
  }
}

export default List;
