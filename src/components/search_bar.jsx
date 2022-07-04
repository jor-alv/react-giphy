import React, { Component } from 'react';

export default class SearchBar extends Component {
  shouldComponentUpdate() {
    return false;
  }

  handleChange = (e) => {
    this.props.searchFunction(e.target.value);
  }

  // No need to bind handleChange since we are using babel-plugin-transform-class-properties
  render() {
    return (
      <input
        type="text"
        className="form-control form-search"
        onChange={this.handleChange}
        icon="fa-solid fa-magnifying-glass"
      />
    );
  }
}
