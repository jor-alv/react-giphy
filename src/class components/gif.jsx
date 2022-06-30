import React, { Component } from 'react';

export default class Gif extends Component {
  render() {
    const src = `https://media3.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.props.handleClick}/>
    )
  }
}
