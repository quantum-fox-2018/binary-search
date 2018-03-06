const testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
const testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];


function ownSort(arr) {
  // Your sorting code

  for(let i = 1; i < arr.length; ++i) {

    let temp = arr[i];

    let j = i -1

    while (j >= 0 && arr[j] > temp) {

      arr[j+1] = arr[j];

      j--

    }

    arr[j+1] = temp;

  }

  return arr

}

function binarySearch(search, array, index) {
  // Your searching code
  let mid = Math.floor((array.length)/2)

  if (array.length == 1 && array[0] !== search) {

    return -1

  } else if (array[0] == search) {

    return index

  } else if (array[1] == search) {

    return 1

  } else {

    if (mid < search) {

      return binarySearch(search, array.slice(mid), array.slice(0,mid-1).length)

    } else {

      return binarySearch(search, array.slice(0,mid), index)

    }

  }

}

const arrayGenapSorted = ownSort(testArrayGenap);
const arrayGanjilSorted = ownSort(testArrayGanjil);

// Driver code
console.log(binarySearch(8, arrayGenapSorted, 0));
console.log(binarySearch(10, arrayGenapSorted, 0));
console.log(binarySearch(33, arrayGenapSorted, 0));
//
console.log(binarySearch(53, arrayGanjilSorted, 0));
console.log(binarySearch(3, arrayGanjilSorted, 0));
console.log(binarySearch(2, arrayGanjilSorted, 0));

module.exports = {
  binarySearch
};


/*

              ALGORITMA ================ >

1. sediakan variabel array 'testArrayGenap' yang diisi dengan deret angka
  1.1. sediakan variabel array 'testArrayGanjil' yang diisi dengan deret angka
  1.2. buat function 'ownSort' dengan parameter 'arr' untuk proses pengurutan menggunakan metode insertion
  1.3. lakukan perulangan sebanyak mulai dari ('i' = 1) sampai jumlah panjang array
    1.3.a. sediakan variabel 'temp' yang diisi dengan nilai arr index ke 'i'
    1.3.b. sediakan variabel 'j' yang diisi dengan nilai 'i' minus 1
    1.3.c. lakukan perulangan dengan kondisi sebanyak jika j >= 0 dan arr indeks ke 'j' > 'temp'
      1.3.c.1. selama kondisi belum terpenuhi lakukan proses :
      1.3.c.2. swapp arr indeks ke 'j' plus 1 sama dengan arr indeks ke 'j' dan j -= 1
      1.3.c.3. jika kondisi sudah terpenuhi maka ganti 'arr' indeks ke 'j' plus 1 sama dengan 'temp'
  1.4. return nilai arr

2. buat function 'binarySearch' dengan parameter 'search', 'array', 'index'
  2.1. sediakan variabel 'mid' untuk mendapatkan nilai tengah
  2.2. buat kondisi jika panjang array sama dengan 1 dan array indeks ke 0 tidak sama dengan 'search'
    2.2.a. maka return -1
  2.3. jika array indeks ke 0 sama dengan search
    2.3.a. maka return 'index'
  2.4. jika array indeks ke 1 sama dengan search
    2.4.a. maka return 1
  2.5. jika semua kondisi tidak terpenuhi maka :
    2.5.a. buat kondisi jika mid lebih kecil dari search maka :
      2.5.a.1. return function binarySearch dengan parameter :
        2.5.a.1.a search, array yang di potong mulai dari mid, dan tambahkan 'index'
                  dengan total panjang array yang di potong mulai dari 0 sampai mid -1
    2.5.b. jika tidak terpenuhi maka return function binarySearch dengan parameter:
      2.5.b.1. search, array yang di potong mulai dari 0 sampai mid, 'index'


*/
