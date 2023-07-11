import { Component } from 'react';
import { Form, Button, Label, Input } from './SearchForm.styled';

export class SearchForm extends Component {
  state = {
    value: '',
  };

  onChange = e => {
    e.preventDefault();
    this.setState({ value: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Button type="submit">
          <Label>Search</Label>
        </Button>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={this.onChange}
          value={this.state.value}
        />
      </Form>
    );
  }
}
