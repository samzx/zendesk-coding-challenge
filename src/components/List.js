import React from 'react';

import Listing from './Listing';
import { itemsPerPage } from '../app';

class List extends React.Component {

    generateList = (tickets) => {
        return(
            tickets.map((item, index) => 
                <Listing
                    item={item}
                    id={item.id}
                    index={index}
                    key={`listing-${index}`}
                    currentTicket={this.props.currentTicket}
                    setTicket={this.props.setTicket}
                    loading={this.props.loading}
                />
            )
        );
    }

    render(){
        return(
            <div className="list" >
                {
                    this.props.data &&
                    this.generateList(this.props.data.tickets)
                }
            </div>
        );
    }
}

export default List;