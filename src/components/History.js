import React from 'react';

class History extends React.Component {

    render() {
        return(
            <div className="history">
            {
                this.props.comments &&
                this.props.comments.map((item, index) => 
                    <p key={`history-${index}`}>{item.body}</p>
                )
            }
            </div>
        );
    }
}

export default History;