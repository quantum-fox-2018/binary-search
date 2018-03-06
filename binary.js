const testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8];
const testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55];

function ownSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
		var min = i;
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		if (min != i) {
			var tmp = arr[i];
			arr[i] = arr[min];
			arr[min] = tmp;
		}
	}
  return arr
}
  //console.log(arr);


function binarySearch(search, array) {
var  max = array[array.length-1]
var  min = array[0]
var  mid = array[Math.floor(array.length/2)]
var index= Math.floor(array.length/2)

if(mid==search){
  return index
}else if(mid!==search){
    if(search < mid){
       var array = array.splice(0,Math.round(array.length/2))
      return binarySearch(search,array);
    }else if(search > mid){
       array =array.splice(Math.round(array.length/2),Math.round(array.length/2))
      return binarySearch(search,array);
    }
}
//console.log(newArr,mid);
  return -1;
}

const arrayGenapSorted = ownSort(testArrayGenap);
const arrayGanjilSorted = ownSort(testArrayGanjil);

// Driver code
//console.log(binarySearch(8, arrayGenapSorted));
// console.log(binarySearch(10, arrayGenapSorted));
console.log(binarySearch(33, arrayGenapSorted));
//
// console.log(binarySearch(53, arrayGanjilSorted));
//console.log(binarySearch(3, arrayGanjilSorted));
//console.log(binarySearch(2, arrayGanjilSorted));

// module.exports = {
//   binary_search
// };
