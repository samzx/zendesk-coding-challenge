import React from 'react';

export const itemsPerPage = 25;

class Pagination extends React.Component {

    getPages = (items) => {
        const numPages = Math.floor(items.length / itemsPerPage);
        let arr = []
        for(let i=0; i<numPages; i++) {
            arr.push(i);
        }
        return (
            arr.map((item) => 
                <div
                    key={`page-${item}`}
                    onClick={() => this.props.setPage(item)}
                >
                    {
                        this.props.currentPage == item ?
                        <b>{item+1}</b> :
                        item+1
                    }
                </div>
            )
        );
    }
    
    render() {
        return(
            <div className="pagination" style={{display: 'flex'}}>
                {
                    this.props.data &&
                    this.getPages(this.props.data.tickets)
                }
            </div>
        );
    }
}

export default Pagination;