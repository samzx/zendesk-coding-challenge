import React from 'react';

export const itemsPerPage = 25;

class Pagination extends React.Component {

    createPagination = (count) => {
        const numPages = Math.floor(count / itemsPerPage);
        let arr = []
        for(let i=1; i<=numPages; i++) {
            arr.push(i);
        }
        return (
            arr.map((page) => 
                <div
                    key={`page-${page}`}
                    onClick={() => {
                        this.props.fetchListings(page);
                    }}
                >
                    {
                        this.props.currentPage == page ?
                        <b>{page}</b> :
                        page
                    }
                </div>
            )
        );
    }
    
    render() {
        return(
            <div className="pagination" style={{display: 'flex', margin: 'auto'}}>
                {
                    this.props.data &&
                    this.createPagination(this.props.data.count)
                }
            </div>
        );
    }
}

export default Pagination;