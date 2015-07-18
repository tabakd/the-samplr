import React from "react";
import Samples from "../../common/samples";
import Sampler from "../../common/sampler";
import Search from "../../common/search";

require("../../styles/main.less")

export default class HomePage extends React.Component {
  constructor(){
    super();

    this.selectTrack = this.selectTrack.bind(this);
    this.addSample = this.addSample.bind(this);

    this.state = {
      samples: []
    }
  }
  selectTrack(track) {
    this.setState({
      track: track
    })
  }
  addSample(sample){
    console.log(sample)
    this.setState({
      samples: this.state.samples.concat(sample),
      track: undefined
    })
  }
  render() {
    console.log(!!this.state.track)
    if(!!this.state.track){
      var sampler = <Sampler track={this.state.track} onSubmit={this.addSample} />
    }
    return (
      <div id="home-page">
          <Search onSelect={this.selectTrack}/>

            <Samples samples={this.state.samples}/>
        
           <div class="sampler right-panel">
              {sampler}
           </div>
      </div>
    );
  }
}
