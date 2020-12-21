import "./App.css";
import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js";
import "react-dropdown/style.css";
import MenuItem from "@material-ui/core/MenuItem";
import { Slider } from "@material-ui/core";
import { Select } from "@material-ui/core";
import Button from "@material-ui/core/Button";

Chart.defaults.global.legend.display = false;

// enum Algo = {
//   HEAP,
//   SELECTION,
//   BUBBLE,
//   MERGE,
//   QUICK,
//   INSERTION
// }

const options = [
  "Heap Sort",
  "Selection Sort",
  "Bubble Sort",
  "Merge Sort",
  "Quick Sort",
  "Insertion Sort",
];

class App extends React.Component {
  sliderUpdate(newValue) {
    this.numCols = newValue;
    console.log("Slider Updated");
  }
  dropDownUpdate(newValue) {
    this.algo = newValue;
    console.log("DropDown Updated");
  }
  constructor(props) {
    super(props);
    this.numCols = 0;
    this.algo = null;
    this.state = {
      selectorFlag: false,
      sliderFlag: false,
      algoSelected: "Select an Algorithm",
      data: {
        labels: [65, 123, 80, 181, 156, 55, 40, 2, 13, 97],
        datasets: [
          {
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 2,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [65, 123, 80, 181, 156, 55, 40, 2, 13, 97],
          },
        ],
      },
    };
  }

  startSort() {
    console.log("Clicked on Visualize");
    this.setState({ selectorFlag: true });
    this.setState({ sliderFlag: true });
    if (this.numCols === 0) {
      this.numCols = 10;
    }
    if (this.algo === null) {
      this.algo = "QUICK";
    }
    // switch (this.algo) {
    //   case "HEAP":

    //   case "SELECTION":

    //   case "MERGE":

    //   case "BUBBLE":

    //   case "INSERTION":

    //   case "QUICK":
    // }
  }

  generateList(givenCols) {
    var randomArray = [];
    while (randomArray.length < givenCols) {
      var r = Math.floor(Math.random() * 250) + 1;
      if (randomArray.indexOf(r) === -1) randomArray.push(r);
    }
    this.setState({
      data: {
        labels: randomArray,
        datasets: [
          {
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 2,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: randomArray,
          },
        ],
      },
    });
  }

  reset() {
    console.log("Clicked on Abort/Reset");
    window.location.reload();
  }

  handleSelectChange(changeEvent) {
    console.log("Selected: ", changeEvent.target.value);
    this.dropDownUpdate(changeEvent.target.value);
    this.setState({ algoSelected: changeEvent.target.value });
  }
  render() {
    return (
      <div align="center">
        <br></br>
        <Select
          autoWidth={true}
          defaultValue={"QUICK"}
          // displayEmpty={true}
          renderValue={() => {
            return this.state.algoSelected;
          }}
          value={this.state.algoSelected}
          disabled={this.state.selectorFlag}
          onChange={(changeEvent, newValue) => {
            this.handleSelectChange(changeEvent);
          }}
        >
          <MenuItem value={"HEAP SORT"}>Heap Sort</MenuItem>
          <MenuItem value={"QUICK SORT"}>Quick Sort</MenuItem>
          <MenuItem value={"MERGE SORT"}>Merge Sort</MenuItem>
          <MenuItem value={"SELECTION SORT"}>Selection Sort</MenuItem>
          <MenuItem value={"INSERTION SORT"}>Insertion Sort</MenuItem>
          <MenuItem value={"MERGE SORT"}>Merge Sort </MenuItem>
        </Select>
        <p>
          <b>Size:</b>
        </p>
        <Slider
          style={{ width: 300 }}
          disabled={this.state.sliderFlag}
          step={5}
          defaultValue={10}
          max={100}
          min={5}
          valueLabelDisplay={"on"}
          onChange={(changeEvent, newValue) => {
            this.sliderUpdate(newValue);
            this.generateList(this.numCols);
          }}
        />
        <br></br>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            this.startSort();
          }}
          disableElevation
        >
          Visualize!
        </Button>
        &nbsp; &nbsp; &nbsp;
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            this.reset();
          }}
          disableElevation
        >
          Reset
        </Button>
        <br></br>
        <br></br>
        <Bar
          width={300}
          height={100}
          options={{
            responsive: true,
            scales: {
              yAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                    beginAtZero: true,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
            maintainAspectRatio: true,
          }}
          data={this.state.data}
        />
      </div>
    );
  }
}
export default App;
