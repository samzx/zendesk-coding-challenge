import React from 'react';

import Pagination from './Pagination';
import List from './List';

import { url, tickets, itemsPerPage } from '../app';

const initialPage = 1;

class Drawer extends React.Component {

    state = {
        currentPage: 0,
        loading: false,
    }

    fetchListings = (page) => {
        if(this.state.loading || this.state.currentPage === page) return;
        this.setState({ currentPage: page, loading: true });
        fetch(url + tickets + `/${itemsPerPage}` + `/${page}`, {
            method: 'GET',
        })
        .then((res) => {
            if(res.ok) {
                return res.json();
            } else {
                throw res;
            }
        })
        .then((json) => {
            this.setState({ loading: false });
            this.props.setData(json);
        })
        .catch((e) => {
            if(e.status) {
                this.setState({ errors: `${e.status} ${e.statusText}`, loading: false });
            } else {
                this.setState({errors: e.message, loading: false});
            }
            console.log(e);
        });
    }

    componentDidMount() {
        this.fetchListings(initialPage);
    }

    render() {
        const { errors, loading } = this.state;
        return(
            <div className="drawer">
            { 
                loading &&
                <div className="message" >
                    <p>{"Loading..."}</p> 
                </div>
            }
            {
                errors && 
                <div className="message" >
                    <p>Something went wrong 😭</p>
                    <p>{errors}</p>
                </div>
            }
                <div className="banner" />
                <List
                    data={this.props.data}
                    currentPage={this.state.currentPage}
                    currentTicket={this.props.currentTicket}
                    setTicket={this.props.setTicket}
                    loading={this.state.loading}
                />
                <Pagination
                    data={this.props.data}
                    currentPage={this.state.currentPage}
                    fetchListings={this.fetchListings}
                />
            </div>
        );
    }
}

export default Drawer;