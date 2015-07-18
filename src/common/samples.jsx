import React from "react";

export default class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {}
  }
  componentDidMount(){
    var track = this.props.sample
    console.log(track)
    SC.stream("/tracks/" + track.id, {}, function(sound){
      this.sound = sound
    }.bind(this))
  }
  toggle(){
    this.sound.play()
  }
  render() {
    return (
      <li onClick={this.toggle}>
        <h3>{this.props.sample.title}</h3>
      </li>
    );
  }
}


export default class Samples extends React.Component {
  render() {
    return (
      <ul className="samples right-panel">
        {this.props.samples.map((s) => <Sample sample={s}/>)}
      </ul>
    );
  }
}
