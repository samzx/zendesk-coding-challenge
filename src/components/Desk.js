import React from 'react';

import Details from './Details';
import History from './History';

class Desk extends React.Component {
    render() {
        return(
            <div className="desk">
                <Details />
                <History />
            </div>
        );
    }
}

export default Desk;