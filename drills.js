

function repeat() {
  for (let i = 0; i < 5; i++) {
    // hello();
    // goodbye();
  }
}

console.log(repeat());

function goodbye() {
  console.log('goodbye world');
}
function hello() {
  console.log('hello world');
}

// function filter(arr, fn {


// };
// function fn() {
//   for (index = 0; index < array.length; index++);
//   if (fn) {
//     return (true);
//   }
// }


// // DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// // First we setup an array of strings we plan to filter:
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// // We use your `filter` function here, capturing a new array into `filteredNames`
// // comprised of names that only begin with 'R'
// const filteredNames = filter(myNames, function (name) {
//   // This is known as a "predicate function" - it's a function that 
//   // only returns a boolean
//   return name[0] === 'R';
// });

// console.log(filteredNames); // => ['Rich', 'Ray']
// // <---- DO NOT EDIT BETWEEN THESE LINES

const steps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

function filterSteps() {
  newSteps = steps.filter(i < 0);
  return (newSteps)
}