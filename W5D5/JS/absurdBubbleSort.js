const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const absurdBubbleSort = function(arr, completionCallback) {
  const outerBubbleSortLoop = function (madeAnySwaps) {
    if (madeAnySwaps) {
      return innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } 
    if (!madeAnySwaps) {
      // console.log(`${arr}`)
      return completionCallback(arr);
    }
  }
  // console.log(`${arr}`)
  return outerBubbleSortLoop(true);
  console.log(`${arr}`)

}

const askIfGreaterThan = function(el1, el2, callback) {
  reader.question(`is ${el1} > ${el2}? `, answer => {
    if (answer === 'y') {
      return callback(true);
    }
    return callback(false);
  })
};

const innerBubbleSortLoop = function(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i == (arr.length -1 )) {
    // console.log(`madeAnySwaps => ${madeAnySwaps}`)
    return outerBubbleSortLoop(madeAnySwaps);
  }
  if (i < (arr.length-1)) {
    // console.log(`i => ${i}`)
    askIfGreaterThan(arr[i], arr[i+1], isGreaterThan => {
      // console.log(`is great => ${isGreaterThan}`)
      if (isGreaterThan) {
        let element = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = element;
        madeAnySwaps = true;
      }
      return innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    })
  } 
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
