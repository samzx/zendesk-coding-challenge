import React from "react";

import { toReadableTime } from "./Details";

class Listing extends React.Component {
  handleClick = () => {
    if (this.props.loading) return;
    this.props.setTicket(this.props.id);
  };

  shortenTime = timeString => {
    const timeZoneIndex = timeString.indexOf("GMT");
    return timeString.substring(0, timeZoneIndex);
  };

  visualPriority = string => {
    const map = {
      urgent: "★★★★",
      high: "★★★",
      normal: "★★",
      low: "★"
    };
    return map[string];
  };

  // Visual Status: Open, Pending, Closed - colors

  render() {
    const { item, index } = this.props;
    return (
      item && (
        <div className="listing" onClick={this.handleClick}>
          <div className="listing--left">
            <div className="listing-subject">
              <h3>{item.subject}</h3>
            </div>
            <div className="listing-time">
              <p>{this.shortenTime(toReadableTime(item.created_at))}</p>
            </div>
          </div>
          <div className="listing--right">
            <div className="listing-type">
              <h3>{item.type}</h3>
            </div>
            <div className="listing-priority">
              <p>{this.visualPriority(item.priority)}</p>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default Listing;
