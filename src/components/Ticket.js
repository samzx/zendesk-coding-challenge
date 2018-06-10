import React from 'react';

import Details from './Details';
import Conversation from './Conversation';

import { url, comments, tickets } from '../app';

class Ticket extends React.Component {
    state = {
        comments: null,
        errors: null,
        loading: false
    }

    componentDidMount() {
        this._mounted = true;
        this.setState({ loading: true })
        fetch(url + comments + `/${this.props.currentTicket}`, {
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
            if(!this._mounted) return;
            this.setState({ comments: json.comments, loading: false });
        })
        .catch((e) => {
            if(!this._mounted) return;
            this.setState({ errors: `${e.status} ${e.statusText}`, loading: false });
            console.log(e);
        });
    }

    componentWillUnmount() {
        this._mounted = false;
    }

    render() {
        return(
            <div className="ticket">
                <Details
                    currentTicket={this.props.currentTicket}
                    data={this.props.data}
                />
                <Conversation comments={this.state.comments} loading={this.state.loading} />
            </div>
        );
    }
}

export default Ticket;