console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 1) {
    console.log(i);
  } else {
    continue;
  }
}

//For/In Loop
// const totalNum = 100;
// let num = 1;

//While Loop
// let num = 1;

// while (num <= 100) {
//   if (num % 2 == 1) {
//     console.log(num);
//   }
//   num++;
// }

//Do/While Loops
// let num = 1;

// do {
//   if (num % 2 == 1) {
//     console.log(num);
//   }
//   num++;
// } while (num <= 100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FIZZBUZZ");
  } else if (i % 3 == 0) {
    console.log("FIZZ");
  } else if (i % 5 == 0) {
    console.log("BUZZ");
  } else {
    console.log(i);
  }
}

//While Loop
// let num = 1;

// while (num <= 100) {
//   if (num % 3 == 0 && 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (num % 3 == 0) {
//     console.log("Fizz");
//   } else if (num % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(num);
//   }
//   num++;
// }

//Do/While Loop
// let num = 1;

// do {
//   if (num % 3 == 0 && 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (num % 3 == 0) {
//     console.log("Fizz");
//   } else if (num % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(num);
//   }
//   num++;
// } while (num <= 100);
