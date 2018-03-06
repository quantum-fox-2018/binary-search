'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code

  for (var i = 0; i < arr.length; i++) {
    
    var temp = arr[i]
    var j = i-1

    while (j >= 0 && arr[j] > temp) {

      arr[j+1] = arr[j]
      j--
    }

    arr[j+1] = temp
  }

  return arr
}// end of ownSort

function binary_search (search, array) {
  // Your searching code
  
  var min = 0
  var max = array.length-1

  while (min <= max) {

    var middle = Math.floor((min + max)/2)

    if (array[middle] === search) {

      return middle
    }

    if (array[middle] < search) {

      min = middle + 1
    } else {

      max = middle - 1
    }
  }

  return -1
 }
//[ 8, 10, [10, 18, 22], 22, 32, 40, 90 ]
var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
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
