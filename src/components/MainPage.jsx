import React, { Component } from "react";
import Select from "react-select";

class MainPage extends Component {
  state = {
    selected: null,
    options: [
      {
        value: "1",
        label: "One",
      },
      {
        value: "2",
        label: "Two",
      },
      {
        value: "3",
        label: "Three",
      },
      {
        value: "4",
        label: "Four",
      },
    ],
  };

  handleChange = (value) => {
    this.setState({
      selected: value,
    });
  };

  render() {
    return (
      <div className="App">
        <Select
          value={this.state.selected}
          onChange={this.handleChange}
          options={this.state.options}
        />
        <div>label: {this.state.selected ? this.state.selected.label : ""}</div>
        <div>value: {this.state.selected ? this.state.selected.value : ""}</div>
      </div>
    );
  }
}

export default MainPage;
