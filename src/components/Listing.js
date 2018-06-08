import React from 'react';

class Listing extends React.Component {
    render() {
        const {item, index} = this.props;
        return(
            <div className="listing" onClick={() => {this.props.setTicket(this.props.id)}}>
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