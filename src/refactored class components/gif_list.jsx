import React, { Component } from 'react';
import Gif from '../components/gif';

export default class GifList extends Component {
  renderList = ({ gifs, selectGif }) => {
    return gifs.map(({ id }) => <Gif id={id} key={id} handleClick={selectGif} />);
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    );
  }
}
