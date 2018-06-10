import React from 'react';

import { itemsPerPage } from '../app';

class Pagination extends React.Component {

    createPagination = (count) => {
        let numPages = Math.floor(count / itemsPerPage) + (count % itemsPerPage > 0 && 1);
        let arr = []
        for(let i=1; i<=numPages; i++) {
            arr.push(i);
        }
        return (
            arr.map((page) => 
                <div
                    key={`page-${page}`}
                    className="pagination--button"
                    onClick={() => {
                        this.props.fetchListings(page);
                    }}
                >
                    {
                        this.props.currentPage == page ?
                        <span className="pagination--button__selected">{page}</span> :
                        <span className="pagination--button__unselected">{page}</span>
                    }
                </div>
            )
        );
    }
    
    render() {
        return(
            <div className="pagination">
                {
                    this.props.data &&
                    this.createPagination(this.props.data.count)
                }
            </div>
        );
    }
}

export default Pagination;