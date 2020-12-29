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
  return resultArr;
}

function quickSortHelper(array) {
  quickSort(array);
  return final_arr;
}
export default quickSortHelper;
