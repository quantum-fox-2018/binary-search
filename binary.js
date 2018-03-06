'use strict'

/*
FOR i=0 to arr length minus 1
  STORE tmp TO i

  FOR j=i-1 TO j less than equal to 0
    IF arr j more than equal to arr tmp

      STORE temp TO arr temp
      INSERT arr tmp TO arr j
      INSERT arr j TO temp
      INSERT tmp to j

    END IF

  j minus 1

i plus 1
RETURN arr
*/

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8] // [ 8, 10, 10, 18, 22, 22, 32, 40, 90 ]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55] //[ 3, 21, 31, 53, 53, 55, 77, 85, 89 ]

function ownSort(arr) {
  // Your sorting code
  for(let i = 0; i < arr.length; i++) {
		let tmp = i;
    for(let j= i-1; j>=0; j--){
      if(arr[j]>arr[tmp]){
        let temp = arr[tmp];
        arr[tmp] = arr[j];
        arr[j] = temp;
        tmp = j;
      }
    }

	}
  return arr
}
// console.log(ownSort(testArrayGenap));

function binary_search (search, array) {
  // Your searching code
  let minArr = 0;
  let maxArr = array.length -1;

  while(minArr <= maxArr){
  let midArr = Math.round((minArr + maxArr)/2);

    if(array[midArr] === search){
      return midArr;
    }else if(array[midArr] < search){
      minArr = midArr+1
    }else{
      maxArr = midArr-1
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
