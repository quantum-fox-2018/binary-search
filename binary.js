'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  var min = 0;
  for(var i = 1; i < arr.length; i++) {
    for(var j = i; j >=0 ; j--) {
      if(arr[j] < arr[j-1]) {
        min = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = min;
      }
    }
  }
  return arr;
}

function binary_search (search, array) {
  // Your searching code
  var mid = Math.floor(array.length/2)-1;
  var min = 0;
  var max = array.length-1;

    while(min !== mid && max !== mid) {
      if(search === array[mid]) {
        return mid;
      } else if(search > array[mid]) {
        min = mid+1;
        mid = Math.floor((min+max)/2);
      } else {
        max = mid-1;
        mid = Math.floor((min+max)/2);
      }
    }
    if(search === array[mid]) {
      return mid;
    }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
// console.log(arrayGenapSorted)
// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
