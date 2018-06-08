import React from 'react';

import Listing from './Listing';

class Table extends React.Component {
    render(){
        return(
            <div className="ticket-list" >
                <table>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>Subject</td>
                            <td>Creation date</td>
                        </tr>
                        {
                            this.props.data.map((item, index) => 
                                <Listing item={item} index={index} key={`listing-${index}`}/>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;