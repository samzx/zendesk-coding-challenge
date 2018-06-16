import React from "react";

class Listing extends React.Component {
  handleClick = () => {
    if (this.props.loading) return;
    this.props.setTicket(this.props.id);
  };

  shortenTime = timeString => {
    const date = new Date(timeString);
    if(date.toDateString() == "Invalid Date") return "";
    return date.toDateString();
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

  render() {
    const { listing } = this.props;
    return (
      listing && (
        <div className="listing" onClick={this.handleClick}>
          <div className="listing--left">
            <div className="listing-subject">
              <h3>{listing.subject}</h3>
            </div>
            <div className="listing-time">
              <p>{this.shortenTime(listing.created_at)}</p>
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
