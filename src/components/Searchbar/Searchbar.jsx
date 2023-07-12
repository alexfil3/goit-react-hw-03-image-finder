import React, { Component } from 'react';
import { Wrapper } from './Searchbar.styled';
import { SearchForm } from './SearchForm/SearchForm';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Wrapper>
      <SearchForm onSubmit={onSubmit} />
    </Wrapper>
  );
};
