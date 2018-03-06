'use strict'

/*
1. sort arr
2. lakukan loop pertama dari 0 sepanjang arr tambahkan 1 di setiap iterasi
  2.a. inisialisasi variabel currentIndex dengan nilai i
  2.b. lakukan loop kedua dari i - 1 sampai dengan 0 kurangi 1 di setiap iterasi
    2.b.1. jika arr[currentIndex] lebih kecil dari arr[j]
      2.b.1.a. inisialisasi variabel temp sama dengan arr[currentIndex]
      2.b.2.b. arr[currentIndex] sama dengan arr[j]
      2.b.3.c. arr[j] sama dengan temp,
      2.b.4.d. ubah nilai currentIndex dengan index ke j, lakukan step ke 2 sampai proses sorting selesai. setelah selesai. lakukan step ke 3
3. kembalikan nilai arr;
*/

/*
1. inisialisasi left dengan nilai index pertama yaitu 0
2. inisialisasi right dengan nilai index terakhir yaitu arr.length - 1
3. inisialisasi result sebagai nilai middle dengan nilai 0
4. selama left lebih kecil atau sama dengan right, lakukan:
  4.a. ganti nilai result dengan menambahkan left dan right lalu di bagi 2 untuk mendapatkan nilai tengahnya. lakukan pembulatan untuk hasilnya
  4.b. jika array[result] sama dengan search (apa yang dicari), maka kembalikkan result (letak index dari search)
  4.c. jika array[result] lebih kecil dari search (apa yang dicari), maka ubah nilai left dengan result di tambah satu. ulangi step 4
  4.d. jika tidak, ubah nilai right dengan result dikurang 1. ulangi step 4
5. jika left lebih besar dari right (tidak ada angka yang sama) kembalikan nilai -1.
*/

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for (var i = 0; i < arr.length; i++) {
    var currentIndex = i;
    for (var j = i - 1; j >= 0; j--) {
      if (arr[currentIndex] < arr[j]) {
        var temp = arr[currentIndex];
        arr[currentIndex] = arr[j];
        arr[j] = temp;
        currentIndex = j;
      }
    }
  }

  return arr;
}

function binarySearch(search, array) {
  // Your searching code
  console.log(array);
  var left = 0;
  var right = array.length - 1;
  var result = 0;

  while (left <= right) {
    result = Math.floor((left + right) / 2);
    if (array[result] === search) {
      return result;
    } else {
      if (array[result] < search) {
        left = result + 1;
      } else {
        right = result - 1;
      }
    }
  }

  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binarySearch(8, arrayGenapSorted))
console.log(binarySearch(10, arrayGenapSorted))
console.log(binarySearch(33, arrayGenapSorted))
console.log('=====================================')
console.log(binarySearch(53, arrayGanjilSorted))
console.log(binarySearch(3, arrayGanjilSorted))
console.log(binarySearch(2, arrayGanjilSorted))

module.exports = {
  binarySearch
}