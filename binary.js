// SOAL SELECTION SORT

'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

// function ownSort(arr) {
//   for(var i=0; i<arr.length; i++) {
//
//     var min = i;
//     for(var j=i+1; j< arr.length; j++) {
//       if(arr[j] < arr[min]) {
//         min = j;
//       }
//     }
//
//     var tmp = arr[i];
//     arr[i] = arr[min];
//     arr[min] = tmp;
//   }
//   return arr;
// }

function ownSort(arr) {     // pakai insertion sort
  for(var i = 0; i < arr.length; i++) {
    var sementara = i;
    for(var j = i-1; j >= 0; j--) {
      if(arr[j] > arr[sementara]) {
        var tmp = arr[sementara];
        arr[sementara] = arr[j];
        arr[j] = tmp;
        sementara = j;
      }
    }
  }

  return arr;
}
// console.log(ownSort(testArrayGenap))

function binary_search(search, array) {
  var low = 0
  var high = array.length-1
  while(low<=high){
    var mid = Math.round((low+high)/2)
    if(array[mid]===search){
      return mid
    }
    else if(array[mid]<search){
      low = mid + 1
    }
    else {
      high = mid - 1
    }
  }

  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
// console.log(arrayGenapSorted)
// console.log(arrayGanjilSorted)
// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

// module.exports = {
//   binary_search
// }
