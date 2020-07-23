function split(wholeArray) {
    let firstHalf, secondHalf
    const midPoint = Math.floor(wholeArray.length/2)

    if (midPoint < 1) {
        firstHalf = wholeArray
        secondHalf = []
    } else {
        firstHalf = wholeArray.slice(0, midPoint)
        secondHalf = wholeArray.slice(midPoint)
    }
    return [firstHalf, secondHalf]
}

function merge (arr) {
    let array = []
    let firstArr = arr[0]
    let secondArr = arr[1]

    while(firstArr.length > 0 && secondArr.length > 0){
        if(firstArr[0] < secondArr[0]){
            array.push(firstArr.shift())
         }else{
            array.push(secondArr.shift())
        }
    }
    return array.concat(firstArr).concat(secondArr)
}

// function mergeSort (wholeArray) {
//     let arrOfSingleArr = []

//     if (wholeArray.length === 1) {
//         arrOfSingleArr.push[wholeArray]
//     } else {
//         let arrSplited= split(wholeArray)
//         split
//     }


// }

function mergeSort (arr) {
    // BASE CASE
    if (arr.length <= 1) {
        return arr
    }

    // RECURSIVE CASE
    // SPLIT & RECUSE
    const splitArr = split(arr)
    const firstHalf = splitArr[0]
    const secondHalf = splitArr[1]

    const sortedFirstHalf = mergeSort(firstHalf)
    const sortedSecondHalf = mergeSort(secondHalf)


    const mergedArray = merge([sortedFirstHalf, sortedSecondHalf])
    return mergedArray
}

// function mergeSort(arr) {
//     // Write code here
//     // BASE CASE: if the array is of length 1, it is sorted so you are allowed to RETURN it
//     if (arr.length <= 1) return arr;

//     // RECURSIVE CASE
//     // SPLIT AND RECURSE
//     const splitArr = split(arr);
//     // const [firstHalf, secondHalf] = split(arr);
//     const firstHalf = splitArr[0];
//     const secondHalf = splitArr[1];

//     // call merge sort on BOTH halves
//     const sortedFirstHalf = mergeSort(firstHalf);
//     const sortedSecondHalf = mergeSort(secondHalf);

//     // MERGE the two SORTED arrays
//     const mergedArray = merge(sortedFirstHalf, sortedSecondHalf);
//     return mergedArray;
//   }
