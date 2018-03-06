'use strict'

/*
PSEUDOCODE
  FUNCTION BINARY SEARCH START
    GET PARAMETER search, array (array IS ASCENDING SORTED WITH INSERTION METHOD)
    CREATE NEW VARIABLE left, SET TO 0
    CREATE NEW VARIABLE right, SET TO LENGTH OF array-1
    WHILE left LESS OR EQUALS THAN right, DO
      CREATE NEW VARIABLE middle
      SET middle TO FLOOR OF (lef+right)/2
      IF search EQUALS TO middle
        RETURN middle
      ELSE IF search LESS THAN array[middle]
        SET right TO middle-1
      ELSE IF search HIGHER THAN array[middle]
        SET left TO middle+1

    RETURN -1
  FUNCTION END
*/

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (let i = 0; i < arr.length; i++) {
    var pointer = i;
    for (let j = i-1; j >= 0; j--) {
      if (arr[pointer] < arr[j]) {
        var temp = arr[pointer];
        arr[pointer] = arr[j];
        arr[j] = temp;
        pointer = j;
      }
    }
    //console.log(arr, i);
  }

  return arr;
}

function binary_search (search, array) {
  // Your searching cod
  var left = 0;
  var right = array.length - 1;

  console.log(array);

  while (left <= right) {
    debugger;
    var middle = Math.floor((left + right) / 2);
    if (search === array[middle]) {
      return middle;
    } else if (search < array[middle]) {
      right = middle-1;
    } else if (search > array[middle]) {
      left = middle+1;
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
console.log('=============================================');
console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = {
  binary_search
}
