const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const addNumbers =  function (sum, numsLeft, completionCallBack) {
  if (numsLeft === 0){
    reader.close();
    return completionCallBack(sum);
  }
  if (numsLeft > 0){
    reader.question(`Type a number.`, answer => { 
      sum += parseInt(`${answer}`, 10);
      numsLeft -= 1;
      console.log(`nums left = ${numsLeft}`);
      return addNumbers(sum, numsLeft, completionCallBack); 
    })
  }
}

addNumbers(0, 0, sum => console.log(`Total sum: ${sum}`));