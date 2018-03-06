'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code

    for (let i = 0; i < arr.length; i++) {

      for (let j = i; j < arr.length; j++) {

        let temp = arr[i]

        if (arr[i] > arr[j]) {

          arr[i] = arr[j]
          arr[j] = temp

        }

      }

    }

  console.log(arr);

}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
