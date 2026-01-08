function mergeSort(arr) {
    //base case 
    if (arr.length <= 1) {
        return arr;
    }
    //if more than 1 element in array, split array into two halves
    let midPoint = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0,midPoint);
    let rightArr = arr.slice(midPoint);
    //recursively split the arrays until we have 1 element
    //a 1 element array is inherently sorted
    leftArr = mergeSort(leftArr);
    rightArr = mergeSort(rightArr);

    //once arrays are returned, we want to beginning arranging back in ascending order
    let leftIndex = 0;
    let rightIndex = 0;
    let sortedArray = [];

    //use a while loop to keep checking until 1 array has been fully evaluated
    while(leftIndex < leftArr.length && rightIndex < rightArr.length) {
       if(leftArr[leftIndex] < rightArr[rightIndex]){
        sortedArray.push(leftArr[leftIndex++]);  
       } else {
        sortedArray.push(rightArr[rightIndex++]);
       }
    }
    //return the sorted array and concat the remaining elements in the arrays
    return sortedArray.concat(leftArr.slice(leftIndex), rightArr.slice(rightIndex));
}