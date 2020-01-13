import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchResults extends Component {
    render() {
        return (
            <ul>
                {this.props.books.map((book, i)  => 
                <Link to='/about' key={i}>
                    <li >{book.volumeInfo.title}</li> 
                </Link>
                )}
            </ul>
        );
    }
}

export default SearchResults;