//1. Fungsi sorting
//2. pertama looping arr dimulai dari array 1. index bertambah
//  2a. buat variable min, yang isinya looping arr
//  2b. lalu lakukan looping kedua dimulai dari (looping1 , -1) ; lebih besar dari -1 && arr[j] > min ; j berkurang
//    2b1.jika looping kedua ditambahkan 1 yang lebih besar maka itu menjadi arr[j] sekarang
//    2b2.ketika semua sudah selesai maka arr[j+1] = min
//    2b3. return arr

//1.Fungsi Binary
//2.pertama tentukan angka tengah terlebih dahulu dengan membagi array length dengan 2. kemudian dibulatkan kebawah
//3.kedua cari variable index tengah keberapa dengan membagi array dengan array length2.
//4.var minimal sama dengan array pertama
//5.var maksimal adalah array terakhir dari length
//6.jika variabel tengah sama dengan bilangan yang di cari, return index
//7.atau jika array tersebut tidak sama maka
//  7a.jika angka yang dicari lebih kecil dari angka tengah
//  7b.maka array length pertama dibagi 2 ke sebelah kiri lalu lakukan pembulatan
//  7c. return binarySearch(search, array)
//  7d.jika angka yang dicari lebih besar dari angka tengah
//  7e. maka array length pertama dibagi 2 ke sebelah kanan lalu lakukan pembulatan
//  7f. jika tidak ditemukan maka funsi akan mereturn -1



const testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
const testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function ownSort(arr) {
  for (var i = 1; i < arr.length; i++) {
		var min = arr[i];
		for (var j = i - 1; j > -1 && arr[j] > min; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = min;
	}
	return arr;
}

function binarySearch(search, array) {
  var mid = array[Math.floor(array.length/2)];
  var index = Math.floor(array.length/2);
  var min = array[0];
  var max = array[array.length -1];
  if(mid === search){
    return index;
  }
  else if(mid !== search){
    if(search < mid){
      array = array.splice(0,Math.round(array.length/2));
      return binarySearch(search,array);
    }
    else if(search > mid){
      array = array.splice(Math.round(array.length/2), array.length);
      return binarySearch(search,array);
    }
    else{
      return -1;
    }
  }
}

const arrayGenapSorted = ownSort(testArrayGenap);
const arrayGanjilSorted = ownSort(testArrayGanjil);

// Driver code
// console.log(binarySearch(8, arrayGenapSorted));
// console.log(binarySearch(10, arrayGenapSorted));
// console.log(binarySearch(99, arrayGenapSorted));
//
// console.log(binarySearch(53, arrayGanjilSorted));
// console.log(binarySearch(3, arrayGanjilSorted));
// console.log(binarySearch(4, arrayGanjilSorted));

// module.exports = {
//   binary_search
// };
