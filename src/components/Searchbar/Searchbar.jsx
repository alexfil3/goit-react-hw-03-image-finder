import React, { Component } from 'react';
import { Wrapper } from './Searchbar.styled';
import { SearchForm } from './SearchForm/SearchForm';

export class Searchbar extends Component {
  state = {};
  render() {
    const { onSubmit } = this.props;

    return (
      <Wrapper>
        <SearchForm onSubmit={onSubmit} />
      </Wrapper>
    );
  }
}
