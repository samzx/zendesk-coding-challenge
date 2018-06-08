import React from 'react';

class Details extends React.Component {

    display = (tickets) => {
        const ticketDetails = tickets.find(
            ticket => ticket.id === this.props.currentTicket
        );
        return (
            ticketDetails &&
            <div>
                <p>id: {ticketDetails.id}</p>
                <p>requester_id: {ticketDetails.requester_id}</p>
                <p>priority: {ticketDetails.priority}</p>
                <p>created_at: {ticketDetails.created_at}</p>
                <p>type: {ticketDetails.type}</p>
                <p>status: {ticketDetails.status}</p>
                <p>subject: {ticketDetails.subject}</p>
                <p>description: {ticketDetails.description}</p>
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