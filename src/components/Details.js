import React from "react";

export const toReadableTime = dateString => {
  const date = new Date(dateString);
  return date.toString();
};

class Details extends React.Component {
  display = tickets => {
    const ticketDetails = tickets.find(
      ticket => ticket.id === this.props.currentTicket
    );
    return (
      ticketDetails && (
        <div>
          <p style={{ textAlign: "center" }}>
            <i>Created {toReadableTime(ticketDetails.created_at)}</i>
          </p>
          <table className="details--table">
            <tbody>
              <tr>
                <td>
                  <h4>Ticket ID</h4>
                </td>
                <td>
                  <h4>Requester ID</h4>
                </td>
                <td>
                  <h4>Submitter ID</h4>
                </td>
              </tr>
              <tr>
                <td>{ticketDetails.id}</td>
                <td>{ticketDetails.requester_id}</td>
                <td>{ticketDetails.submitter_id}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>
                  <h4>Status</h4>
                </td>
                <td>
                  <h4>Type</h4>
                </td>
                <td>
                  <h4>Priority</h4>
                </td>
              </tr>
              <tr>
                <td>{ticketDetails.status}</td>
                <td>{ticketDetails.type}</td>
                <td>{ticketDetails.priority}</td>
              </tr>
            </tbody>
          </table>
          <hr className="details--split" />
          <div>
            <h3>Subject</h3>
            <p>{ticketDetails.subject}</p>
            <h3>Tags</h3>
            <p>
              {ticketDetails.tags.map((tag, index) => (
                <span className="ticket--tag" key={`tag-${index}`}>
                  {tag}
                </span>
              ))}
            </p>
            <h3>Description</h3>
            <p> {ticketDetails.description}</p>
          </div>
        </div>
      )
    );
  };

  render() {
    return (
      <div className="details">
        {this.props.data && this.display(this.props.data.tickets)}
      </div>
    );
  }
}

export default Details;
