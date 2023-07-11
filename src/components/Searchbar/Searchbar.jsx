import React, { Component } from 'react';
import { Wrapper } from './Searchbar.styled';
import { SearchForm } from './SearchForm/SearchForm';

export class Searchbar extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <SearchForm onSubmit={this.props.onSubmit} />
      </Wrapper>
    );
  }
}
