import React from 'react';

import Listing from './Listing';

class Table extends React.Component {
    render(){
        return(
            <div className="ticket-list" >
                {
                    this.props.data &&
                    this.props.data.tickets.map((item, index) => 
                        <Listing
                            item={item}
                            id={item.id}
                            index={index}
                            key={`listing-${index}`}
                            setTicket={this.props.setTicket}
                        />
                    )
                }
            </div>
        );
    }
}

export default Table;