var final_arr = [];
const final_color_arr = [];
function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  var pivot = array[0];
  var lesserArray = [];
  var greaterArray = [];

  for (var i = 1; i < array.length; i++) {
    if (array[i] > pivot) {
      greaterArray.push(array[i]);
    } else {
      lesserArray.push(array[i]);
    }
  }
  var resultArr = quickSort(lesserArray).concat(pivot, quickSort(greaterArray));
  final_arr.push(Array.from(resultArr));
  var color_arr = new Array(lesserArray.length).fill(0);
  color_arr.push(2);
  color_arr = color_arr.concat(new Array(greaterArray.length).fill(1));
  final_color_arr.push(color_arr.slice());
  color_arr.fill(0);
  return resultArr;
}

function quickSortHelper(array) {
  quickSort(array);
  return [final_arr, final_color_arr];
}
export default quickSortHelper;
