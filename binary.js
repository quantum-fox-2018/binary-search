'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(array) {
  // Your sorting code
  for(var i = 0; i < array.length; i++) {
    var temp = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}


function binary_search (search, array) {
  // Your searching code
  console.log(array);
  console.log('search: '+search);
  var minIndex = 0;
  var maxIndex = array.length-1;

  while (minIndex <= maxIndex) {
    var currentIndex = Math.floor((minIndex + maxIndex) / 2);
    var currentElement = array[currentIndex];
      //console.log('currentIndex: '+currentIndex);
      //console.log('currentElement: '+currentElement);
    if (currentElement < search) {
        minIndex = currentIndex + 1;

    }
    else if (currentElement > search) {
        maxIndex = currentIndex - 1;

    }
    else {
        return currentIndex;
    }
  }
  return -1;
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
