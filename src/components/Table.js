import React from 'react';

import Listing from './Listing';
import { itemsPerPage } from './Pagination';

class Table extends React.Component {

    generateList = (tickets) => {
        const showTickets = tickets.slice(
            this.props.currentPage * itemsPerPage,
            (this.props.currentPage + 1) * itemsPerPage
        );
        return(
            showTickets.map((item, index) => 
                <Listing
                    item={item}
                    id={item.id}
                    index={index}
                    key={`listing-${index}`}
                    setTicket={this.props.setTicket}
                    setComments={this.props.setComments}
                />
            )
        );
    }

    render(){
        return(
            <div className="ticket-list" >
                {
                    this.props.data &&
                    this.generateList(this.props.data.tickets)
                }
            </div>
        );
    }
}

export default Table;