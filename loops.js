//This is Zanda here.
//I have created an array called numbers with valuse 1 through 5.
// I have written a for loop that prints each number in the array
// This script demonstrates the use of for and while loops to iterate through an array of numbers.
const numbers = [1, 2, 3, 4, 5];

console.log("Using for loop:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log("Using while loop:");
while (numbers.length > 0) {
  let number = numbers.pop();
  console.log(number);
}
//l need help with creating a loop that prints only even numbers from the numbers array.
// Can Karah please help me with that?

// No problem Zanda! Here's that array you asked for.
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}
//Thanks Karah.
//Purrity can you help me with creating a loop that calculates the sum of all numbers in the array.
