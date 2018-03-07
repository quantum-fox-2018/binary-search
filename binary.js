'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
// var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let firstNum = 0;
      let secondNum = 0;
      if (arr[i] < arr[j]) {
        firstNum = arr[i];
        secondNum = arr[j];
        arr[j] = firstNum;
        arr[i] = secondNum;
      }    
    }    
  }
  return arr
}

//TEST CASE SORT
// console.log(ownSort(testArrayGenap));

function binary_search (search, array) {
  // Your searching code
  // console.log(array.length);
  let start = 0;
  let mid = Math.floor((array.length)/2);
  let end = array.length-1;
  // console.log('======',end)
  // console.log(mid); // 4

  while(start <= end) {
    if (search == array[mid]) {
      return mid;
    } else if (search < array[mid]) {
      end = mid-1;
      mid = Math.floor((start+end)/2)
    } else if (search > array[mid]) {
      start = mid+1;
      mid = Math.floor((start+end)/2)
    }
  }

  return -1;

  // XXX RECURSIVE METHOD XXX
  // if (array[mid] == search) {
  //   return mid;
  // } else {
  //   if (search < array[mid]) {
  //     let newMid = Math.floor(mid/2);
  //     let newArr = array.splice(0,mid);
  //     console.log(newArr);
  //     // console.log(newMid); // 2
  //     return binary_search(search,newArr);

  //   } else if (search > array[mid]) {
  //     let newMid = Math.floor(mid/2);
  //     let newArr = array.slice(mid,array.length);
  //     console.log(newArr);
  //     // console.log(newMid); // 2
  //     return binary_search(search,newArr);
      
  //   }

  // }

}

var arrayGenapSorted = ownSort(testArrayGenap) // [ 8, 10, 10, 18, 22, 22, 32, 40, 90 ]
// var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(18, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

// console.log(binary_search(53, arrayGanjilSorted))
// console.log(binary_search(3, arrayGanjilSorted))
// console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  // binary_search
}
