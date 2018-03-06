'use strict'

/*
SET variable testArrayGenap dengan nilai [40, 18, 22, 32, 90, 10, 10, 22, 8]
SET variable testArrayGanjil dengan nilai [3, 31, 89, 53, 53, 85, 77, 21, 55]

SET variable arrayGenapSorted dengan nilai testArrayGenap
SET variable arrayGanjilSorted dengan nilai testArrayGanjil

CREATE function bernama ownSort untuk sorting dengan parameter arr berbentuk array

  SET variable temporary bernama temp
  DO looping dari variable i =0 dengan kondisi i lebih kecil dari panjang arr, setiap iterasi i+1
    SET variable nilai sama dengan arr index i
    DO looping ke depan dari kiri arr index i (j= i-1) dengan kondisi arr index j lebih besar dari nilai, setiap iterasi j +1
      SET arr index j+1 sama dengan arr index j, jika kondisi tidak ketemu maka lanjutkan line selanjutnya
  SET arr index j+1 sama dengan nilai

  kembalikan nilai arr

CREATE function bernama binary_search dengan parameter search dan array
  SET variable arr dengan fungsi ownSort dengan parameter array
  SET variable lowest dengan nilai 0
  SET variable highest dengan nilai panjang arr kurang 1

  WHILE lowest lebih kecil sama dengan highest maka lakukan looping:
    SET variable mid dengan hasil pertambahan lowest dengan highest dibagi 2
    IF nilai arr index mid sama dengan nilai yang dicari (search) maka
      kembalikan nilai mid, jika tidak true maka looping selesai dan lanjut ke step selanjutnya
    IF nilai arr index mid lebih kecil dari nilai search maka
      SET nilai lowest menjadi nila mid yang ditambah 1
    ELSE
      SET nilai lowest menjadi nila mid yang dikurang 1

  kembalikan -1
*/

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {

  var temp;

  for (var i = 0; i < arr.length; i++) {
    var nilai = arr[i]
    for (var j = i-1; arr[j] > nilai; j--) {
      arr[j+1] = arr[j]
    }
    arr[j+1] = nilai
  }
  return arr
}

function binary_search (search, array) {
  var arr = ownSort(array)
  var lowest = 0
  var highest = arr.length-1

  while (lowest <= highest) {
    var mid = Math.floor((lowest + highest)/2)
    if (arr[mid] === search) {
      return mid
    }
    if (arr[mid] < search) {
      lowest = mid+1
    } else {
      highest = mid-1
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
