import React from 'react';

import Listing from './Listing';

class Table extends React.Component {
    render(){
        return(
            <div className="ticket-list" >
                <table>
                {
                    this.props.data &&
                    <tbody>
                        <tr>
                            <td></td>
                            <td>Subject</td>
                            <td>Creation date</td>
                        </tr>
                        {
                            this.props.data.tickets.map((item, index) => 
                                <Listing item={item} index={index} key={`listing-${index}`}/>
                            )
                        }
                    </tbody>
                }
                </table>
            </div>
        );
    }
}

export default Table;