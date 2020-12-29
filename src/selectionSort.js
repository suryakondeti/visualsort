const final_arr = [];
const final_color_arr = [];
function selectionSort(inputArr) {
  const color_arr = new Array(inputArr.length).fill(0);
  let n = inputArr.length;
  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (inputArr[j] < inputArr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = temp;
      color_arr[i] = 1;
      color_arr[min] = 1;
      final_arr.push(inputArr.slice()); //.slice() for deepcopying (pass by value)
      final_color_arr.push(color_arr.slice());
      color_arr.fill(0);
    }
  }
  return [final_arr, final_color_arr];
}

export default selectionSort;
