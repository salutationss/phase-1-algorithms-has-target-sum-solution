function hasTargetSum(array, target) {
  const seenNumbers = {};
  for (const number of array) {
    const difference = target - number;
    if (seenNumbers[difference]) {
      return true;
    }
    seenNumbers[number] = true;
  }
  return false;

}

/* 
  Write the Big O time complexity of your function here
  Big O: O(n^2)
*/

/* 
  Add your pseudocode here
    1. create a variable called sum and set it to 0
  2. loop through the array
  3. add each element to the sum variable
  4. if the sum variable is equal to the target variable, return true
  5. else return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
