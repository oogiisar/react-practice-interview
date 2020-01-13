import React, { Component } from 'react';
import SearchResults from './SearchResults';
import ValidationError from './ValidationError';
import GetAPI from '../GetAPI'
import './SearchBook.css';

class SearchBook extends Component {
    constructor(props) {
        super(props);
        this.searchInput = React.createRef();
    }
    state = {
        books: [],
        search: {
            value: ''
        }

    }

    updateSearch(search) {
        this.setState({search: {value: search}});
    }

    validateSearch(fieldValue) {
        const name = this.state.search.value.trim();
        if (name.length === 0) {
          return 'Search is required';
        } else if (name.length < 3) {
          return 'Search must be at least 3 characters long';
        }
    }

    handleSubmit(e)  {
        e.preventDefault();
        const search = this.state.search.value;
        GetAPI(search)
            .then(books =>
                this.setState({
                    books: books
                })
            )

    }

    callAPI() {
        GetAPI(this.state.searchTerm)
            .then(books =>
                this.setState({
                    books: books
                })
            )
    }

    render() { 
        return (
            <>
                <form className='search' onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor='searchbook'>SearchBook</label>
                    <input 
                        type='text'
                        className='searchinput'
                        name='search'
                        id='search' 
                        placeholder='search book' 
                        onChange={e => this.updateSearch(e.target.value)} />
                    <ValidationError message={this.validateSearch()}/>
                    <button type='submit' className='button'
                    disabled={
                        this.validateSearch()
                    }>Submit</button>
                </form>
                <SearchResults books={this.state.books}/>
            </>
        );
    }

}

export default SearchBook;