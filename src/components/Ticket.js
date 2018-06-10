import React from 'react';

import Details from './Details';

class Ticket extends React.Component {
    state = {
        errors: null,
        loading: false
    }

    render() {
        return(
            <div className="ticket">
                <Details
                    currentTicket={this.props.currentTicket}
                    data={this.props.data}
                />
            </div>
        );
    }
}

export default Ticket;