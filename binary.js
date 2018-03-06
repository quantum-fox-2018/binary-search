'use strict'
/*
function ownSort parameter arr number
  1. LOOP FOR index i sama dengan nol, index i  kurang dari panjang arr dan index i pertambahan satu
    2. Buat variable first sama dengan index i;
    3. LOOP FOR index j sama dengan index dikurangi satu, index j kurang dari sama dengan nol, dan index j pengurangan satu
      4. JIKA arr dari first kurang dari arr index j maka
        5. Buat variable min sama dengan arr dari fisrt
        6. arr dari first sama dengan arr index j
        7. arr  index j sama dengan min
        8. fisrt sama dengan index j
      end JIKA
    end LOOP FOR
  end LOOP FOR
end function

function binary_search parameter search dan array
  1. Buat variable low sama dengan nol
  2. Buat variable high sama dengan panjang array dikurangi satu
  3. Buat variable mid sama dengan pembulatan dari penjumlahan low dan high di bagi 2

  4. Kondisi WHILE dimana low kurang dari sama dengan high maka
    5. JIKA array dari index mid sama dengan nilai search maka
      6. return mid
    7. JIKA lainnya array index mid kurang dari nilai search maka
      8. low sama dengan mid ditambah satu
      9. mid sama dengan pembulatan dari penjumlahan low dan high di bagi 2
    10. JIKA lainnya maka
      11. high sama dengan mid dikurangi satu
      12. mid sama dengan pembulatan dari penjumlahan low dan high di bagi 2
    end JIKA
  end WHILE
end function
*/




var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function ownSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var first = i;
    for (var j = i - 1; j >= 0; j--) {
      if (arr[first] < arr[j]) {
        var min = arr[first];
        arr[first] = arr[j];
        arr[j] = min;
        first = j;
      }
    }
  }
  return arr;
}

function binary_search(search, array) {
  var low = 0;
  var high = array.length - 1;
  var mid = Math.floor((low + high) / 2);

  while (low <= high) {
    if (array[mid] === search) {
      return mid;
    } else if (array[mid] < search) {
      low = mid + 1;
      mid = Math.floor((low + high) / 2);
    } else  {
      high = mid - 1;
      mid = Math.floor((low + high) / 2);
    }
  }
  return -1;
}

var arrayGenapSorted = ownSort(testArrayGenap);
var arrayGanjilSorted = ownSort(testArrayGanjil);

// Driver code
console.log(binary_search(8, arrayGenapSorted)); // 0
console.log(binary_search(10, arrayGenapSorted)); // 1
console.log(binary_search(33, arrayGenapSorted)); // -1

console.log(binary_search(53, arrayGanjilSorted)); // 4
console.log(binary_search(3, arrayGanjilSorted)); // 0
console.log(binary_search(2, arrayGanjilSorted)); // -1

module.exports = {
  binary_search
}
