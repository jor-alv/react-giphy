import React, { Component } from 'react';

export default class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      console.log(this.props.id);
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const src = `https://media3.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} className="gif" onClick={this.handleClick} />
    );
  }
}
