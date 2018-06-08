import React from 'react';

import { url, comments } from '../app';

class Listing extends React.Component {

    handleClick = () => {
        this.props.setTicket(this.props.id);
        fetch(url + comments + `/${this.props.id}`, {
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
            this.props.setComments(json.comments);
        })
        .catch((e) => {
            this.setState({ errors: `${e.status} ${e.statusText}`, loading: false });
            console.log(e);
        });
    }
    render() {
        const {item, index} = this.props;
        return(
            <div className="listing" onClick={this.handleClick}>
                <div className="listing-subject">
                    <p>{item.subject}</p>
                </div>
                <div className="listing-time">
                    <p>{item.created_at}</p>
                </div>
                <div className="listing-priority">
                    <p>{item.priority}</p>
                </div>
                <div className="listing-type">
                    <p>{item.type}</p>
                </div>
            </div>
        );
    }
}

export default Listing;