function selectionSort(arr) {
    let index = 0
    while (index != arr.length) {
        for(let i=index+1; i<arr.length; i++) {
            if(arr[index] > arr[i]) {
                let temp = arr[index]
                arr[index] = arr[i]
                arr[i] = temp
            }
        }
        index++
    }
    return arr
}

console.log(selectionSort([8,5,7,1,9,3]));
console.log(selectionSort([33,2,52,106,73]));
console.log(selectionSort([13,5,22,99,11]));