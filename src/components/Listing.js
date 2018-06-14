import React from "react";

import { toReadableTime } from "./Details";

class Listing extends React.Component {
  handleClick = () => {
    if (this.props.loading) return;
    this.props.setTicket(this.props.id);
  };

  shortenTime = timeString => {
    try {
      timeString = new Date(timeString).toString();
      const timeZoneIndex = timeString.indexOf("GMT");
      return timeString.substring(0, timeZoneIndex).trim();
    } catch (e) {
      console.log("Could not parse time.", e);
      return "";
    }
  };

  visualPriority = string => {
    const map = {
      urgent: "★★★★",
      high: "★★★",
      normal: "★★",
      low: "★"
    };
    return map[string] ? map[string] : "";
  };

  // Visual Status: Open, Pending, Closed - colors

  render() {
    const { listing, index } = this.props;
    return (
      listing && (
        <div className="listing" onClick={this.handleClick}>
          <div className="listing--left">
            <div className="listing-subject">
              <h3>{listing.subject}</h3>
            </div>
            <div className="listing-time">
              <p>{this.shortenTime(toReadableTime(listing.created_at))}</p>
            </div>
          </div>
          <div className="listing--right">
            <div className="listing-type">
              <h3>{listing.type}</h3>
            </div>
            <div className="listing-priority">
              <p>{this.visualPriority(listing.priority)}</p>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default Listing;
