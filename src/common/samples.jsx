import React from "react";

export default class Sample extends React.Component {
  render() {
    return (
      <div id="home-page">
        <h3>Sample</h3>
        {this.props.sample}
      </div>
    );
  }
}


export default class Samples extends React.Component {
  render() {
    return (
      <div id="home-page">
        <h2>Samples</h2>
        {this.props.samples.map((s) => <Sample sample={s}/>)}
      </div>
    );
  }
}
