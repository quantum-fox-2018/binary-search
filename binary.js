'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  // Insertion sort
  for(let i = 0; i < arr.length; i++) {
    var tmp = i;
    for(let j = i-1; j >= 0; j--) {
      if(arr[j] > arr[tmp]) {
        var tmps = arr[tmp];
        arr[tmp] = arr[j];
        arr[j] = tmps;
        tmp = j;
      }
    }
  }
  return arr;
}

// function binarySearch (search, array) {
//   // Your searching code
//   if(array.length === 1) {
//     if(array[0] !== search) {
//       return -1;
//     }
//     return 0;
//   }
//
//   let mid = Math.floor(array.length/2);
//   if(search === array[mid]) {
//     return mid;
//   } else if(search > array[mid]) {
//     array = array.slice(mid, array.length);
//     return mid + binarySearch(search, array);
//   } else {
//     array = array.slice(0, mid);
//     return binarySearch(search, array);
//   }
// }

function binarySearch (search, array) {
  // Your searching code
  let start = 0;
  let finish = array.length-1;
  let mid = Math.floor(array.length/2)-1;

  while((mid != start) && (mid != finish)) {
    if(search === array[mid]) {
      return mid;
    } else if(array[mid] > search) {
      start = 0;
      finish = mid-1;
      mid = Math.floor(start+finish/2);
    } else {
      start = mid+1;
      finish = array.length-1;
      mid = Math.floor(start+finish/2);
    }
  }

  return (array[mid] === search) ? mid : -1;
}

var arrayGenapSorted = ownSort(testArrayGenap);
var arrayGanjilSorted = ownSort(testArrayGanjil);

console.log(arrayGenapSorted);
// Driver code
console.log(binarySearch(8, arrayGenapSorted));
console.log(binarySearch(10, arrayGenapSorted));
console.log(binarySearch(33, arrayGenapSorted));

console.log(arrayGanjilSorted);
console.log(binarySearch(53, arrayGanjilSorted));
console.log(binarySearch(3, arrayGanjilSorted));
console.log(binarySearch(2, arrayGanjilSorted));

// module.exports = {
//   binary_search
// }
