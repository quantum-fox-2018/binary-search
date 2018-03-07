'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code

  //SELECTION SORT
  let index = 0
  while(index != arr.length) {
    for(let i=index+1; i<arr.length; i++) {
      if(arr[index] > arr[i]) {
        let temp = arr[index]
        arr[index] = arr[i]
        arr[i] = temp
      }
    }
    index++
  }
  return arr

  //USING ARRAY
  // var arrSorted = []

  // while(arr.length != 0) {
  //   var minValue = arr[0]
  //   var indexValue = 0

  //   for(var i=0; i<arr.length; i++) {
  //     if(minValue > arr[i]) {
  //       minValue = arr[i]
  //       indexValue = i
  //     }
  //   }

  //   arrSorted.push(minValue)
  //   arr.splice(indexValue,1)
  // }

  // return arrSorted

}

function binary_search (search, array) {
  // Your searching code
  console.log(array)

  //USING SPLICE
  // var midValue = array[Math.floor((array.length-1)/2)]
  // var idxmidValue = Math.floor((array.length-1)/2)

  // if(midValue == search) {
  //   return idxmidValue
  // }
  
  // if(midValue < search) {
  //   var newArray = array.splice(idxmidValue, Math.floor(array.length/2)+1)
  //   return binary_search(search, newArray)
  // } else if(midValue > search) {
  //   var newArray = array.splice(0, Math.floor(array.length/2)+1)
  //   return binary_search(search, newArray)
  // }

  
    
  // return -1;

  //WITHOUT SPLICE
  var idxStart = 0
  var idxEnd = array.length-1
  console.log(array, 'mencari nilai:' , search)

  while(idxStart <= idxEnd) {
    var idxMid = Math.floor((idxStart+idxEnd)/2)  

    if(search == array[idxMid]) {
      return idxMid
    }
    if(array[idxMid] < search) {
      idxStart = (idxMid + 1)
    
    }
    if(array[idxMid] > search) {
      idxEnd = (idxMid - 1)
      
    }

  }

  return -1

}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(18, arrayGenapSorted))
// console.log(binary_search(10, arrayGenapSorted))
// console.log(binary_search(33, arrayGenapSorted))

// console.log(binary_search(53, arrayGanjilSorted))
// console.log(binary_search(3, arrayGanjilSorted))
// console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
