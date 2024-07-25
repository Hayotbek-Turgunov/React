import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "webrain", count: 0 };
  }

  //setState
  render() {
    const plus = () => {
      if (this.state.count < 5) {
        this.setState({ count: this.state.count + 1 });
      }
    };

    const minus = () => {
      if (this.state.count > 0) {
        this.setState({ count: this.state.count + 1 });
      }
    };

    return (
      <div style={{ flex: 1 }}>
        <h1>Hello from Class Components {this.state.count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
      </div>
    );
  }
}

export default ClassComponent;
