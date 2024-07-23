/* eslint-disable react/prop-types */
import React from "react";

class SayHello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Webrain",
      count: 123,
      value: 0,
      percentage: 0,
    };
  }

  render() {
    const onChange = () => {
      this.setState({ title: "webrain" });
    };

    const onChangeInput = (e) => {
      console.log(e.target.value);
      this.setState({ percentage: e.target.value });
      this.setState({ percentage: this.state.count });
    };

    return (
      <div>
        <h1>
          Count:{this.state.count} - {this.state.value}
        </h1>
        <h1>Persentage:{this.state.percentage}</h1>
        <input
          type="text"
          onChange={(e) => onChangeInput(e)}
          value={this.state.percentage}
        />
        <button onClick={onChange}>change</button>
      </div>
    );
  }
}

export default SayHello;
