'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  return arr
}const testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
const testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

/*
1. di dalam function ownSort buat sebuah perulangan
2. loop dari i = 0 sampai i kurang dari panjang arr dengan increment sebanyak 1 kali
  2.a. buat variabel berisi array index ke i
  2.b. dan loop lagi, selama j lebih dari 0 dan arr ke j lebih dari a, dimulai dari i dikurang 1
    2.b.1. masukan arr ke j kedalam arr index ke j ditambah 1, dengan  decrement sebanyak 1 kali
  2.c. buat arr index ke j ditambah 1 sama dengan a
3. return arr
*/

function ownSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var a = arr[i];
    // for (var j = i - 1; j >= 0; j--) {
    //   if (arr[j] <= arr[i]) {
    //     arr[j] = a;
    //   }
    //   a = arr[i];
    // }
    var j = i - 1
    while (j >= 0 && arr[j] > a) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = a
  }
  return arr;
}

// console.log(testArrayGenap);
// console.log(testArrayGanjil);

/*
1. di dalam function binarySearch, buatlah sebuah variabel half untuk menampung sebuah nilai. nilai tersebut berisi panjang array dibagi 2 yang telah dibulatkan
2. lalu buatlah perbandingan. jika panjang array sama dengan 0, maka langsung mereturn -1
3. selain itu, jika array index ke half bernilai sama dengan search, maka return half
4. selain itu, jika, paramter search lebih besar dari array index ke half, maka akan mereturn fungsi itu sendiri dengan paramter array dipotong (slice) dari 0 sampai index half - 1
5. selain itu, program akan langsung mereturn function dengan parameter array dipotong (slice) dari 0 sampai dengan index ke half
*/

function binarySearch(search, array) {
  var half = Math.floor(array.length / 2);

  if (array.length === 0) {
    return -1;
  } else if (array[half] == search) {
    return half;
  } else if (search > array[half]) {
    return binarySearch(search, array.slice(0, half));
  } else {
    return binarySearch(search, array.slice(0 , half));
  }

//   var min = array[0];
//   var max = array[array.length - 1];
//   var mid = array[Math.round(array.length /2)];
//   if (mid === search) {
//     return Math.round(array.length /2);
//   } else {
//     if (mid >= search) {
//     array = array.splice(0, Math.round(array.length / 2));
//     return binarySearch(search, array)
//   } else if (mid <= search) {
//     array = array.splice(Math.round(array.length / 2), Math.round(array.length / 2))
//     return binarySearch(search, array)
//   }
// }
}

const arrayGenapSorted = ownSort(testArrayGenap);
const arrayGanjilSorted = ownSort(testArrayGanjil);
console.log(arrayGenapSorted);
console.log(arrayGanjilSorted);

// Driver code
console.log(binarySearch(8, arrayGenapSorted));
console.log(binarySearch(10, arrayGenapSorted));
console.log(binarySearch(33, arrayGenapSorted));

console.log(binarySearch(53, arrayGanjilSorted));
console.log(binarySearch(3, arrayGanjilSorted));
console.log(binarySearch(2, arrayGanjilSorted));

// module.exports = {
//   binary_search
// };


function binarySearch (search, array) {
  // Your searching code
  return 0;
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
