'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  for(let i=1; i<arr.length; i++){
    for(let j=0; j<=i-1; j++){
      let front = arr[j];
      let back = arr[i];
      if(arr[i]<arr[j]){
        arr[i] = front;
        arr[j] = back;
      }
    }
  }
  return arr;
}

function binary_search (search, array) {
  let bot = 0;
  let top = array.length-1;
  while(bot<=top){
    let mid = Math.floor((bot+top)/2);
    if(search == array[mid]){
      return mid;
    } else {
      if(search > array[mid]){
        bot = mid+1;
      } else {
        top = mid-1;
      }
    }
  }
  return -1
}

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
