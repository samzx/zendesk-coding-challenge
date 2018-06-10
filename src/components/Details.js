import React from 'react';

export const toReadableTime = (dateString) => {
    const date = new Date(dateString);
    return date.toString();
}

class Details extends React.Component {

    display = (tickets) => {
        const ticketDetails = tickets.find(
            ticket => ticket.id === this.props.currentTicket
        );
        return (
            ticketDetails &&
            <div>
                <p>Ticket ID: {ticketDetails.id}</p>
                <p>Requester ID: {ticketDetails.requester_id}</p>
                <p>Subject: {ticketDetails.subject}</p>
                <p>Priority: {ticketDetails.priority}</p>
                <p>Type: {ticketDetails.type}</p>
                <p>Status: {ticketDetails.status}</p>
                <p>Creation time: {toReadableTime(ticketDetails.created_at)}</p>
                <p>Tags: {ticketDetails.tags.map((tag, index) => <span className='ticket--tag' key={`tag-${index}`}>{tag}</span>)}</p>
                <p>Description: </p>
                <p> {ticketDetails.description}</p>
            </div>
        );
    }

    render() {
        return(
            <div className="details">
                {
                    this.props.data &&
                    this.display(this.props.data.tickets)
                }
            </div>
        );
    }
}

export default Details;