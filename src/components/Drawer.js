import React from 'react';

import Pagination from './Pagination';
import Table from './Table';

class Drawer extends React.Component {

    render() {
        return(
            <div className="drawer">
                <Table
                    data={this.props.data}
                    currentPage={this.props.currentPage}
                    setTicket={this.props.setTicket}
                    setComments={this.props.setComments}
                />
                <Pagination
                    data={this.props.data}
                    currentPage={this.props.currentPage}
                    setPage={this.props.setPage}
                    fetchListings={this.props.fetchListings}
                />
            </div>
        );
    }
}

export default Drawer;