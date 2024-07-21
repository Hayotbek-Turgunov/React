/* eslint-disable react/prop-types */
import React from "react";
import Frame from "./Frame";

class SayHello extends React.Component {
  render() {
    return (
      <div>
        <Frame>
          <h1>{this.props.name}</h1>
          <h1>{this.props.children}</h1>
        </Frame>
      </div>
    );
  }
}

export default SayHello;
