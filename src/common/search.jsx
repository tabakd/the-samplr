import React from "react";
import SC from "soundcloud-sdk";

SC.initialize({
  client_id: '18dba0a1eda744082022890a76a3f686'
})


export default class TrackResult extends React.Component {
  render() {
    var track = this.props.track

    return (
      <li className="search-result">
        // <span class="search-result-username">{track.user}</span>
        <br />
        <span class="search-result-title">{track.title}</span>
        <div class="search-result-play"></div>
        <div class="search-result-sample"></div>
      </li>
    );
  }
}

export default class TrackSearch extends React.Component {
  constructor() {
    super();
    this.search = this.search.bind(this);
    this.select = this.select.bind(this);
    this.state = {
      results: []
    };   
  }
  select(track) {
    this.props.onSelect(track)
  }
  search(e) {
    SC.get('/tracks', { q: e.target.value}, (tracks) => {
      this.setState({
        results: tracks
      })
    })
  }
  render() {
    return (
      <div className="search left-panel">
        <input onChange={this.search} />
        <ul className="search-results">
        {this.state.results.map((t) => 
          <div onClick={this.select.bind(this, t)}>
            <TrackResult key={t.id} track={t}/>
          </div>
        )}
        </ul>
      </div>
    );
  }
}