function bubbleSort (array) {
  let n = array.length-1
  while (n > 0) {
    for (let i=0; i<n; i++) {
      if (determineSwap(array[i], array[i+1])) {
        let temp =array[i]
        array[i] = array[i+1]
        array[i+1] = temp
      }
    }
    n--
  }
  return array
}

function determineSwap(previous, next){
  if(previous > next){
      return true
  }else{
      return false
  }
}

// swap ->
// 8 & 3
// 8& 4
// 8 & 2

// [3,4,2,8]
// 3&4
// 4&2

// [3,2,4,8]

// 3 & 2



