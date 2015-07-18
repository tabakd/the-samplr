import React from "react";
import { getData } from "../../common/request";

export default class HomePage extends React.Component {
  componentWillMount() {
    console.log("[HomePage] will mount with server response: ", this.props.data.home);
  }

  render() {
    let { title } = "Home";

    return (
      <div id="home-page">
        <h1>{title}</h1>
      </div>
    );
  }
}
