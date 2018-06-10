import React from 'react';

class Conversation extends React.Component {

    render() {
        return(
            <div className="conversation">
            {
                this.props.loading ?
                <p>Loading comments...</p> :
                this.props.comments &&
                this.props.comments.map((item, index) => 
                    <div key={`conversation-${index}`}>{item.author_id} {item.body}</div>
                )
            }
            </div>
        );
    }
}

export default Conversation;