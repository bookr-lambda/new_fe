import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import SearchResults from './SearchResults.js';

class SearchBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      items: []
    };
  }

  search() {
    const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
    fetch(`${API_URL}${this.state.query}`)
      .then(response => response.json())
      .then(json => {
        let {items} = json;
        this.setState({items})
      });
  }

  render() {
    return (
      <div className="Search">
          <h1 className="Search-title">Search Bookr</h1>
        <div>
          <FormGroup>
            <InputGroup>
              <FormControl type="text" placeholder="Find a Book!"
              onChange={ event => this.setState({ query: event.target.value }) }
              onKeyPress={ event => {
                if ('Enter' === event.key) {
                  this.search();
                }
              }} />
              <InputGroup.Addon onClick={() => this.search()}>
                <Glyphicon glyph="search"></Glyphicon>
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
          <SearchResults items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default SearchBook;
