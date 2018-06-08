import React from 'react';

class Listing extends React.Component {
    render() {
        const {item, index} = this.props;
        return(
            <tr>
                <td>{index+1}</td>
                <td>{item.subject}</td>
                <td>{item.created_at}</td>
            </tr>
        );
    }
}

export default Listing;