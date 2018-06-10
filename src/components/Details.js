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
                <p><b>Ticket ID: </b>{ticketDetails.id}</p>
                <p><b>Requester ID: </b>{ticketDetails.requester_id}</p>
                <p><b>Priority: </b>{ticketDetails.priority}</p>
                <p><b>Type: </b>{ticketDetails.type}</p>
                <p><b>Status: </b>{ticketDetails.status}</p>
                <p><b>Creation time: </b>{toReadableTime(ticketDetails.created_at)}</p>
                <p><b>Tags: </b>{ticketDetails.tags.map((tag, index) => <span className='ticket--tag' key={`tag-${index}`}>{tag}</span>)}</p>
                <p><b>Subject: </b></p>
                <p>{ticketDetails.subject}</p>
                <p><b>Description: </b></p>
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