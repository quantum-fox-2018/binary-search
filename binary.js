'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  var tempNum=0
  for (var i = 0; i <= arr.length; i++) {
    for (var j = i-1; j >=0; j--) {
      if (arr[j]>arr[j+1]) {
        tempNum=arr[j+1]
        arr[j+1]=arr[j]
        arr[j]=tempNum
      }
    }

  }
  return arr
}

function binary_search (search, array) {
  // Your searching code
  // return 0;
  var middle
  var evenMiddle
  var divTwo=array.length/2
  if(array.length%2!==0){
    middle=Math.floor(divTwo)-1
  }
  else{
    evenMiddle=(divTwo)+((divTwo)-1)
  }
  if(search===array[middle]){
    return middle
  }
  else if(search<array[middle]){
    for (var i = 0; i < middle; i++) {
      if(search===array[i]){
        return i
      }
    }
    return -1
  }
  else{
    for (var i = middle; i < array.length; i++) {
      if(search===array[i]){
        return i
      }
    }
    return -1
  }
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
console.log(arrayGenapSorted);
console.log(arrayGanjilSorted);
// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  // binary_search
}
