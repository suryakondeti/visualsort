const final_arr = [];
const final_color_arr = [];
var temp;

function bubbleSort(givenArr) {
  const color_arr = new Array(givenArr.length).fill(0);
  var numSwaps = 1;
  while (numSwaps !== 0) {
    numSwaps = 0;
    for (var i = 0; i < givenArr.length - 1; i++) {
      if (givenArr[i] > givenArr[i + 1]) {
        numSwaps += 1;
        temp = givenArr[i];
        givenArr[i] = givenArr[i + 1];
        givenArr[i + 1] = temp;
        color_arr[i] = 1;
        color_arr[i + 1] = 1;
        final_arr.push(givenArr.slice()); //.slice() for deepcopying (pass by value)
        final_color_arr.push(color_arr.slice());
        color_arr.fill(0);
      }
    }
  }
  return [final_arr, final_color_arr];

  //   for (var i = 1; i < givenArr.length; i++) {
  //     if (givenArr[i] < givenArr[i - 1]) {
  //       var j = i;
  //       while (givenArr[j] < givenArr[j - 1] && j > 0) {
  //         temp = givenArr[j];
  //         givenArr[j] = givenArr[j - 1];
  //         givenArr[j - 1] = temp;
  //         j--;
  //         color_arr[j] = 1;
  //         color_arr[j - 1] = 1;
  //         final_arr.push(givenArr.slice()); //.slice() for deepcopying (pass by value)
  //         final_color_arr.push(color_arr.slice());
  //         color_arr.fill(0);
  //       }
  //     }
  //   }
  //   return [final_arr, final_color_arr];
}

export default bubbleSort;
