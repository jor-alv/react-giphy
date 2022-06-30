import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const testKey = 'cEVyj60slbrQ6REDp2XqhoznBEyvXZeY';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [
        { id: "cl8PBySAmhZV0MQ6HV" },
        { id: "9JrrdrYGjnnFvs1yWt" },
        { id: "3FmmhJdHN4PSESllzZ" },
        { id: "PkFSwQG8Lh6hxvEGAO" },
        { id: "ka0jgJG9hkAWk" },
        { id: "Gnvk5QoQcNala" },
        { id: "BFtrl2E20mqri4qH3G" },
        { id: "l3VFHvPnJv4eLYkTXx" },
        { id: "Rkc2oA8ceBlxcPjI1B" },
        { id: "VG93bGQKGpYw4isuB9" },
        { id: "y7WFXpmXYPZ0md1aHI" },
        { id: "Jx9n9pSg9JUJi" },
        { id: "QaLk3odmX2FavPHYD3" },
        { id: "3o7bu4hLGW6TuLe3D2" },
        { id: "xUOrwhwzKzUCTMnWxO" },
        { id: "l4FGxGzzQGoaehdfi" }
      ],
      selectedGifId: "cl8PBySAmhZV0MQ6HV"
    };
  }

  search = (query) => {
    giphy(testKey).search({
      q: query,
      rating: 'g',
      limit: 40
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}
