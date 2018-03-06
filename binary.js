'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function ownSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    for(var x = i; x > 0; x--) {
      if (arr[x-1] > [arr[x]]) {
        var temp = arr[x];
        arr[x] = arr[x-1];
        arr[x-1] = temp;
      }
    }
  }
  return arr;
}

function binary_search (search, array) {
  debugger;
  var mid = Math.floor(array.length/2);

  if (array[mid] !== search) {
    if(array.length === 1) {
      return -1;
    }
    if (search > array[mid]){
      array = array.slice(mid,array.length);
    } else {
      array = array.slice(0,mid);
    }
    return binary_search (search, array);
  } else {
    return mid;
  }


}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

//Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
