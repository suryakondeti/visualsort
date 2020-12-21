import React, { Component } from "react";
import Dropdown from "react-dropdown";
import App from "./App";
import { Select } from "@material-ui/core";

const options = [
  "Heap Sort",
  "Selection Sort",
  "Bubble Sort",
  "Merge Sort",
  "Quick Sort",
  "Insertion Sort",
];

class FlatArrayExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
    };
    this._onSelect = this._onSelect.bind(this);
  }

  _onSelect(option) {
    console.log("You selected ", option.label);
    this.setState({ selected: option });
    new App().dropDownUpdate(option);
  }

  render() {
    const defaultOption = this.state.selected;
    return (
      <div style={{ width: 300, height: 10 }}>
        <Dropdown
          options={options}
          onChange={this._onSelect}
          value={defaultOption}
          placeholder="Select Sorting Algorithm"
        />
      </div>
    );
  }
}

export default FlatArrayExample;
