import React from "react";
import ReactSlider from "react-slider";
console.log(ReactSlider)
import SC from "soundcloud-sdk";


SC.initialize({
  client_id: '18dba0a1eda744082022890a76a3f686'
})



export default class Sampler extends React.Component {
  constructor(props) {
    super(props);
    this.submit= this.submit.bind(this);
    this.state = this.props.track
  }
  submit() {
    this.props.onSubmit(this.props.track)
  }

  render() {
    return (
      <div>
        <h3>Sampler</h3>
        {this.props.track.title}
        
        <button onClick={this.submit}>Save</button>
      </div>
    );
  }
}