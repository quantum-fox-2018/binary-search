'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(let i=0; i<arr.length; i++){
    let sorted = arr[i]
    let j = i

    while(j>0 && arr[j-1] > sorted){
      arr[j] = arr[j-1]
      j--
      
    }
    // console.log(arr[j])
    // console.log('=',sorted)
    arr[j] =  sorted
  }
  console.log(arr)
  return arr
}

function binarySearch (search, array) {
  // Your searching code
  let min = 0
  let max = array.length - 1
  
  while(min <= max){
    let mid = Math.floor((max + min)/2)
    
    if(array[mid] == search){
      return mid
    }
    else if(array[mid] > search){
      max = mid - 1
    }
    else{
      min = mid + 1
    }
  }
  return -1
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

console.log('====BINARY SEARCH====')
// // Driver code
console.log('index ke : ',binarySearch(8, arrayGenapSorted));
console.log('index ke : ',binarySearch(10, arrayGenapSorted));
console.log(binarySearch(33, arrayGenapSorted));

console.log('index ke : ',binarySearch(53, arrayGanjilSorted));
console.log('index ke : ',binarySearch(3, arrayGanjilSorted));
console.log(binarySearch(2, arrayGanjilSorted));

module.exports = {
  binarySearch
}
