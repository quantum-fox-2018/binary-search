'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  // Selection sort
  for(let i = 0; i < arr.length; i++) {
    let tmp = i;
    for(let j = i+1; j < arr.length; j++) {
      if(arr[j] < arr[tmp]) {
        tmp = j;
      }
    }
    //[arr[tmp], arr[i]] = [arr[i], arr[tmp]];
    let tmp1 = arr[i];
    arr[i] = arr[tmp];
    arr[tmp] = tmp1;
  }

  return arr;
}

function binarySearch (search, array) {
  // Your searching code
  console.log(array);
  if(array.length === 1) {
    return -1;
  }

  let mid = Math.floor(array.length/2);
  if(search === array[mid]) {
    return mid;
  } else if(search > array[mid]) {
    array = array.slice(mid, array.length);
    return binarySearch(search, array);
  } else {
    array = array.slice(0, mid);
    return binarySearch(search, array);
  }
}

var arrayGenapSorted = ownSort(testArrayGenap);
var arrayGanjilSorted = ownSort(testArrayGanjil);

console.log(arrayGenapSorted);
// Driver code
console.log(binarySearch(8, arrayGenapSorted));
console.log(binarySearch(10, arrayGenapSorted));
console.log(binarySearch(33, arrayGenapSorted));

console.log(binarySearch(53, arrayGanjilSorted));
console.log(binarySearch(3, arrayGanjilSorted));
console.log(binarySearch(2, arrayGanjilSorted));

// module.exports = {
//   binary_search
// }
