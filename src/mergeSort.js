var final_arr = [];
var final_color_arr = [];
function merge(arr1, arr2) {
  let sorted = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
    else sorted.push(arr2.shift());
  }
  return sorted.concat(arr1.slice().concat(arr2.slice()));
}

function mergeSort(array) {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2),
    left = mergeSort(array.slice(0, mid)),
    right = mergeSort(array.slice(mid));
  var resultArr = merge(left, right);
  final_arr.push(Array.from(resultArr));
  var color_arr = new Array(left.length).fill(1);
  color_arr = color_arr.concat(new Array(right.length).fill(0));
  final_color_arr.push(color_arr.slice());
  color_arr.fill(0);
  return resultArr;
}

function mergeSortHelper(array) {
  mergeSort(array);
  return [final_arr, final_color_arr];
}
export default mergeSortHelper;
