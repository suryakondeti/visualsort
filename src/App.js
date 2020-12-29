import "./App.css";
import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js";
import "react-dropdown/style.css";
import MenuItem from "@material-ui/core/MenuItem";
import insertionSort from "./insertionSort";
import selectionSort from "./selectionSort";
import quickSortHelper from "./quickSort";
import { Slider } from "@material-ui/core";
import { Select } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import bubbleSort from "./bubbleSort";

Chart.defaults.global.legend.display = false;
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// enum Algo = {
//   HEAP,
//   SELECTION,
//   BUBBLE,
//   MERGE,
//   QUICK,
//   INSERTION
// }

// const options = [
//   "Heap Sort",
//   "Selection Sort",
//   "Bubble Sort",
//   "Merge Sort",
//   "Quick Sort",
//   "Insertion Sort",
// ];

class App extends React.Component {
  sizeSliderUpdate(newValue) {
    this.numCols = newValue;
    this.generateList(this.numCols);
  }
  speedSliderUpdate(newValue) {
    console.log(this.speed);
    this.speed = -196 * newValue + 1980;
    console.log(this.speed);
  }
  dropDownUpdate(newValue) {
    this.algo = newValue;
  }
  constructor(props) {
    super(props);
    this.numsToSort = [65, 123, 80, 181, 156, 55, 40, 2, 13, 97];
    this.numCols = 0;
    this.speed = 1000;
    this.algo = null;
    this.state = {
      selectorFlag: false,
      sliderFlag: false,
      algoSelected: "INSERTION SORT",
      data: {
        labels: [65, 123, 80, 181, 156, 55, 40, 2, 13, 97],
        datasets: [
          {
            backgroundColor: "rgb(0,158,192)",
            borderWidth: 2,
            data: [65, 123, 80, 181, 156, 55, 40, 2, 13, 97],
          },
        ],
      },
    };
  }

  startSort() {
    var toSort;
    var toColor;
    this.setState({ selectorFlag: true });
    this.setState({ sliderFlag: true });
    if (this.numCols === 0) {
      this.numCols = 10;
    }
    if (this.algo === null) {
      this.algo = "INSERTION SORT";
    }
    switch (this.algo) {
      case "HEAP SORT":
        console.log("HEAP ", this.numCols);
        break;

      case "SELECTION SORT":
        console.log("SELECTION  ", this.numCols);
        [toSort, toColor] = selectionSort(this.numsToSort);
        this.visualize(toSort, toColor);
        break;

      case "MERGE SORT":
        console.log("MERGE ", this.numCols);
        break;

      case "BUBBLE SORT":
        console.log("BUBBLE ", this.numCols);
        [toSort, toColor] = bubbleSort(this.numsToSort);
        this.visualize(toSort, toColor);
        break;

      case "INSERTION SORT":
        console.log("INSERTION ", this.numCols);
        console.log(this.numsToSort);
        [toSort, toColor] = insertionSort(this.numsToSort);
        this.visualize(toSort, toColor);
        break;

      case "QUICK SORT":
        console.log("QUICK  ", this.numCols);
        // [toSort, toColor] = quickSort(this.numsToSort);
        [toSort, toColor] = quickSortHelper(this.numsToSort);
        this.visualize(toSort, toColor);
        break;

      default: {
      }
    }
  }

  visualize_helper(givenArr, colorArr) {
    this.setState({
      data: {
        labels: givenArr,
        datasets: [
          {
            backgroundColor: colorArr,
            borderWidth: 2,
            data: givenArr,
          },
        ],
      },
    });
  }

  async visualize(final_arr, final_color_arr) {
    for (var i = 0; i < final_arr.length; i++) {
      if (final_color_arr === null) {
        final_color_arr = [];
        final_color_arr[i] = new Array(final_arr.length).fill(0);
      }
      const colorArr = [];
      for (var j = 0; j < final_color_arr[i].length; j++) {
        if (final_color_arr[i][j] === 1) {
          colorArr.push("rgb(0,0,128)");
        } else if (final_color_arr[i][j] === 0) {
          colorArr.push("rgb(230,0,126)");
        } else if (final_color_arr[i][j] === 2) {
          colorArr.push("rgb(255,211,0)");
        }
      }
      this.visualize_helper(final_arr[i], colorArr);
      await delay(this.speed);
    }
    // this.setState({ selectorFlag: false });
    // this.setState({ sliderFlag: false });
  }

  generateList(givenCols) {
    const randomArray = [];
    while (randomArray.length < givenCols) {
      var r = Math.floor(Math.random() * 250) + 1;
      if (randomArray.indexOf(r) === -1) randomArray.push(r);
    }
    this.numsToSort = randomArray;
    this.setState({
      data: {
        labels: randomArray,
        datasets: [
          {
            backgroundColor: "rgb(0,158,192)",
            borderWidth: 2,
            data: randomArray,
          },
        ],
      },
    });
  }

  reset() {
    window.location.reload();
  }

  handleSelectChange(changeEvent) {
    this.dropDownUpdate(changeEvent.target.value);
    this.setState({ algoSelected: changeEvent.target.value });
  }
  render() {
    return (
      <div align="center">
        <br></br>
        <Select
          autoWidth={true}
          defaultValue={"INSERTION SORT"}
          renderValue={() => {
            return this.state.algoSelected;
          }}
          value={this.state.algoSelected}
          disabled={this.state.selectorFlag}
          onChange={(changeEvent, newValue) => {
            this.handleSelectChange(changeEvent);
          }}
        >
          <MenuItem value={"INSERTION SORT"}>Insertion Sort</MenuItem>
          <MenuItem value={"HEAP SORT"}>Heap Sort</MenuItem>
          <MenuItem value={"QUICK SORT"}>Quick Sort</MenuItem>
          <MenuItem value={"MERGE SORT"}>Merge Sort</MenuItem>
          <MenuItem value={"SELECTION SORT"}>Selection Sort</MenuItem>
          <MenuItem value={"BUBBLE SORT"}>Bubble Sort </MenuItem>
        </Select>
        <p>
          <b>Array length:</b>
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
            this.sizeSliderUpdate(newValue);
          }}
        />
        <p>
          <b>Sorting speed:</b>
        </p>
        <Slider
          style={{ width: 300 }}
          disabled={this.state.sliderFlag}
          step={1}
          defaultValue={5}
          max={10}
          min={1}
          valueLabelDisplay={"off"}
          onChange={(changeEvent, newValue) => {
            this.speedSliderUpdate(newValue);
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
