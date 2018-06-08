import React from 'react';

import Table from './Table';
import Pagination from './Pagination';

class Drawer extends React.Component {
    render() {
        return(
            <div className="drawer">
                <Table data={this.props.data} />
                <Pagination />
            </div>
        );
    }
}

export default Drawer;