'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55, 90, 99, 888, 900, 43]

function ownSort(arr) {
  // Insertion search
  for(let i = 0; i < arr.length; i++){

      if(arr[i] >= arr[i+1]){
          let temp1 = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = temp1;
          //let indexJ = i;
          //console.log('di sni==== '+arr[i+1]);
      }

      for(let j = i; j >= 0; j--){
          //console.log(arr[j]);
          if(arr[j] < arr[j-1]){
              let temp2 = arr[j];
              arr[j] = arr[j-1];
              arr[j-1] = temp2;
              //console.log('masuk sini');
          }
          //console.log(arr);
      }


  }
  //console.log(arr);
  //console.log('===============');
  return arr
}

function binary_search(search, array) {
  let mid = Math.floor(array.length/2);

  if(array.length > 1){
      if(array[mid] > search){
          let kiri = array.slice(0, mid);
          //console.log(kiri);
          return binary_search(search, kiri);
      }else if(array[mid] <= search) {
          //console.log('Ini MIdnya: '+mid);
          let kanan = array.slice(mid , array.length);

          // console.log(kanan);
          // console.log(array[mid]);
          if(binary_search(search, kanan) == -1){
            //console.log(kanan);
            return -1;
          }else{
            //console.log(kanan+' '+mid);
            return mid+binary_search(search, kanan);
          }

      }else {
          //console.log(array[mid]+'-------'+array);
          return mid;
      }
  }else{
    if(array[mid] !== search || array[mid] === undefined || typeof array === 'NAN'){
        //console.log('ga kesini');
        return -1;
    }else {
        return mid;
    }
  }

}

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)
// console.log(ownSort(testArrayGenap));
// console.log(ownSort(testArrayGanjil));
//Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGanjilSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

console.log(binary_search(21, arrayGenapSorted))

module.exports = {
  binary_search
}
