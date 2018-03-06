'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  //insertion sorting
  for (var i = 1; i < arr.length; i++) {
    for (var j = i; j >= 0; j--) {
      if (arr[j] < arr[j-1]) {
        var temp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = temp;
      }
    }
  }
  return arr;
}

function binarySearch (search, array) {
  // Your searching code
  var lo = 0;
  var mid = Math.floor(array.length/2);
  var hi = array.length-1;

  while(lo !== mid && mid !== hi){
    if(array[mid] === search){
        return mid;
    }else if (search < array[mid]) {
      hi = mid;
      mid = Math.floor((hi-lo)/2)
    }else if(search > array[mid]){
      lo = mid;
      mid = Math.ceil((hi+lo)/2)
    }
  }

  if(array[mid] === search){
    return mid;
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(arrayGenapSorted);
console.log(arrayGanjilSorted);
// Driver code

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]

var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]


console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))

console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }
