import React from "react";

class Details extends React.Component {
  shortenTime = timeString => {
    const date = new Date(timeString);
    if (date.toDateString() == "Invalid Date") return "";
    return date.toLocaleString("en-US");
  };

  createTitleRow = titleArr => {
    return (
      <tr>
        {titleArr.map((title, index) => (
          <td key={`${title}-${index}`}>
            <h4>{title}</h4>
          </td>
        ))}
      </tr>
    );
  };

  createDataRow = dataArr => {
    return (
      <tr>
        {dataArr.map((data, index) => <td key={`${data}-${index}`}>{data}</td>)}
      </tr>
    );
  };

  createTags = tags => {
    return tags.map((tag, index) => (
      <span key={`tag-${index}`}>
        {tag}
        {index + 1 != tags.length && ", "}
      </span>
    ));
  };

  display = ticket => {
    const {
      id,
      created_at,
      submitter_id,
      requester_id,
      assignee_id,
      status,
      type,
      priority,
      subject,
      tags,
      description
    } = ticket;
    return (
      ticket && (
        <div>
          <h3 className="details--id">Ticket {id}</h3>
          <p className="details--created">
            Created {this.shortenTime(created_at)}
          </p>
          <table className="details--table">
            <tbody>
              {this.createTitleRow([
                "Submitter ID",
                "Requester ID",
                "Asignee ID"
              ])}
              {this.createDataRow([submitter_id, requester_id, assignee_id])}
              {this.createTitleRow(["Status", "Type", "Priority"])}
              {this.createDataRow([status, type, priority])}
            </tbody>
          </table>
          <hr className="details--split" />
          <div>
            <h3>Subject</h3>
            <p>{subject}</p>
            <h3>Tags</h3>
            <p>{this.createTags(tags)}</p>
            <h3>Description</h3>
            <p> {description}</p>
          </div>
        </div>
      )
    );
  };

  render() {
    return (
      <div className="details">
        {this.props.data &&
          this.props.currentTicket &&
          this.display(
            this.props.data.tickets.find(
              ticket => ticket.id === this.props.currentTicket
            )
          )}
      </div>
    );
  }
}

export default Details;
