import React from 'react';

class History extends React.Component {

    render() {
        return(
            <div className="history">
            {
                this.props.comments &&
                this.props.comments.map((item, index) => 
                    <div key={`history-${index}`}>{item.body}</div>
                )
            }
            </div>
        );
    }
}

export default History;