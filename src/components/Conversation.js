import React from 'react';

class Conversation extends React.Component {

    render() {
        return(
            <div className="conversation">
                <h3>Comments</h3>
                {
                    this.props.loading ?
                    <p>Loading comments...</p> :
                    this.props.comments &&
                    this.props.comments.map((item, index) => 
                        <div className="conversation--comment" key={`conversation-${index}`}>
                            <p>Author ID: {item.author_id}</p>
                            <p>{item.body}</p>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Conversation;