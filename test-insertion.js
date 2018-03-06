function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    var pointer = i;
    for (let j = i-1; j >= 0; j--) {
      if (arr[pointer] < arr[j]) {
        var temp = arr[pointer];
        arr[pointer] = arr[j];
        arr[j] = temp;
        pointer = j;
      }
    }
    //console.log(arr, i);
  }

  return arr;
}

console.log(insertionSort([40, 18, 22, 32, 90, 10, 10, 22, 8]));
console.log(insertionSort([3, 31, 89, 53, 53, 85, 77, 21, 55]));
