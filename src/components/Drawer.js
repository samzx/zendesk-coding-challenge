import React from 'react';

import Pagination from './Pagination';
import Table from './Table';

class Drawer extends React.Component {

    state = {
        currentPage: 0
    }

    setPage = (currentPage) => {
        this.setState({currentPage});
    }

    render() {
        return(
            <div className="drawer">
                <Table
                    data={this.props.data}
                    currentPage={this.state.currentPage}
                    setTicket={this.props.setTicket}
                    setComments={this.props.setComments}
                />
                <Pagination
                    data={this.props.data}
                    currentPage={this.state.currentPage}
                    setPage={this.setPage}
                />
            </div>
        );
    }
}

export default Drawer;