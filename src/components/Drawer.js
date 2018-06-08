import React from 'react';

import Pagination from './Pagination';
import Table from './Table';

class Drawer extends React.Component {
    render() {
        return(
            <div className="drawer">
                <Table data={this.props.data}  setTicket={this.props.setTicket} />
                <Pagination />
            </div>
        );
    }
}

export default Drawer;