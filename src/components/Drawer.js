import React from 'react';

import Table from './Table';

class Drawer extends React.Component {
    render() {
        return(
            <div className="drawer">
                {
                    this.props.data && 
                    <Table data={this.props.data.tickets} />
                }
            </div>
        );
    }
}

export default Drawer;