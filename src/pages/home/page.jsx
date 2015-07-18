import React from "react";
import Samples from "../../common/samples";
import Search from "../../common/search";

export default class HomePage extends React.Component {
  constructor(){
    super();
    this.state = {
      samples: ['sick beat']
    }
  }

  render() {
    return (
      <div id="home-page">
        <Samples samples={this.state.samples}/>
        <Search />
      </div>
    );
  }
}
