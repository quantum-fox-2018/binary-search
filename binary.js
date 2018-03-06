'use strict'
/**
 * STEPS in Binary Search:
 * 1. Sort
 * 2. Search array
 * 3. Make variables for lowest value, middle value, and highest value,
 * 4. IF the middle value is the same as the search value => return the middle value index
 * 5. ELSE IF the middle value is higher then search value => change the highest value to the middle value and find the new middle value by adding the new highest value and the low value then divide it by 2.
 * 6. ELSE IF the middle value is lower then search value => change the lowest value to the middle value and find the new middle value by adding the new highest value and the low value then divide it by 2.
 * 7. repeat process 4 through 6 until the lower value, middle value, and highest value have the same index.
 * 8. IF the loop is done and the search value is still unfound => return -1
 * 
 * 
 * PSEUDOCODE for BINARY SEARCH
 * (after sort)
 * 
 * SET low as 0
 * SET high as array.length - 1
 * SET middle as low added by high then divide it by 2. The total value of middle is then substracted by 1.
 * 
 * WHILE low is not equal to middle and low is not equal to high
 *  IF array[middle] is equal to search value return middle
 *  ELSE IF array[middle] is greater then search value
 *    SET high as middle
 *    SET middle as low added by high then divide it by 2.
 *  ELSE IF array[middle] is lower then search value
 *    SET low as middle
 *    SET middle as low added by high then divide it by 2.
 * 
 * IF array[middle] is equal to search value return middle
 * ELSE return -1     
 *  
 */

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

function ownSort(arr) {
  // Your sorting code
  for(let counter = 0; counter<arr.length; counter++){
    for(let counter2 = counter; counter2<arr.length; counter2++){
      if(arr[counter] > arr[counter2]){
        let temp = arr[counter];
        arr[counter] = arr[counter2];
        arr[counter2] = temp;
      }
    }
  }
  return arr;
}

function binarySearch (search, array) {
  // Your searching code
  
  //RECURSIVE not finished!
  // if(array.length ===  1 && array[0] !== search) return -1
  // else{
  //   let halfArrLength = Math.floor((array.length ) /2);

  //   if(array[halfArrLength] === search) return halfArrLength;
  //   else{
  //     let array1 = [];
  //     let array2 = [];

  //     for(let counter = 0; counter<array.length; counter++){
  //       if(counter<halfArrLength){
  //         array1.push(array[counter]);
  //       } 
  //       else {
  //         array2.push(array[counter]);
  //       }
  //     }

  //     console.log('This is Arr1: '+array1);
  //     console.log('This is Arr2: '+array2);

  //     if(array[halfArrLength] > search) return binarySearch(search, array1);
  //     else return halfArrLength + binarySearch(search, array2);
  //   }
  // }

  let low = 0;
  let mid = Math.floor(array.length /2) -1;
  let high = array.length-1;
  while(low !== mid && low !== high){
    if(array[mid] === search) {
      return mid;
    }
    else if(array[mid] > search){
      high = mid;
      mid = Math.floor((low + high) /2);
    }else if(array[mid] < search){
      low = mid;
      mid = Math.floor((low + high) /2);
    }
  }
  if(array[mid] === search) {
    return mid;
  }else{
    return -1
  }
}


var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binarySearch(8, arrayGenapSorted))    //0
console.log(binarySearch(10, arrayGenapSorted))   //1
console.log(binarySearch(33, arrayGenapSorted))   //-1

console.log(binarySearch(53, arrayGanjilSorted))  //3
console.log(binarySearch(3, arrayGanjilSorted))   //0
console.log(binarySearch(2, arrayGanjilSorted))   //-1

module.exports = {
  binarySearch
}
