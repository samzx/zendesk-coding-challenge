import React from 'react';

import Details from './Details';
import History from './History';

import { url, comments } from '../app';

class Desk extends React.Component {
    state = {
        comments: null,
    }

    componentDidMount() {
        this._mounted = true;
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
            this.setState({ comments: json.comments });
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
            <div className="desk">
                <Details
                    currentTicket={this.props.currentTicket}
                    data={this.props.data}
                />
                <History comments={this.state.comments} />
            </div>
        );
    }
}

export default Desk;