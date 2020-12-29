const final_arr = [];
const final_color_arr = [];
var temp;
function heapSort(givenArr) {
  const color_arr = new Array(givenArr.length).fill(0);
  for (var i = 0; i < givenArr.length - 1; i++) {
    var curr_min = 1000;
    for (var j = i; j < givenArr.length; j++) {
      if (givenArr[j] < curr_min) {
        curr_min = givenArr[j];
      }
    }
  }
  return [final_arr, final_color_arr];
}

export default heapSort;
