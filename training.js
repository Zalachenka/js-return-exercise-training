// Largest number function
function largestNumber() {
  return Math.max(11, -2, 23, 4);
}
console.log(largestNumber());

// Longest string function
function longestString(x, y) {
  var x = '2341312134';
  var y = '@#$%^&**((*&^';
  if (x.length > y.length) {
    return 'x is a longer string';
  } else {
    return 'y is a longer string';
  }
}
console.log(longestString());

// Decreasing number function

function countdown(num) {
  if (num <= 0) {
    return 0;
  }
  console.log(num);
  return countdown(num - 1);
}
console.log(countdown(8));

// Counting to number function

function simpleCounter(currentCounter, limit) {
  console.log(currentCounter);
  if (currentCounter >= limit) {
    return 0;
  }
  return simpleCounter(currentCounter + 1, limit);
}
console.log(simpleCounter(0, 4));

// Counting between two defined numbers function

function counter(x, y) {
  if (x > y) {
    return 0;
  }
  console.log(x);
  return counter(x + 1, y);
}
console.log(counter(4, 12));

// Counting between two non-sorted numbers

function advancedCounter(x, y) {
  if (x == y) {
    console.log(x);
    return 0;
  } else if (x > y) {
    return advancedCounter(y, x);
  }
  console.log(x);
  return advancedCounter(x + 1, y);
}
console.log(advancedCounter(12, 4));

// Counting from 0 to a number each second

let i = 0;

function synchronizedCounter(num) {
  setTimeout(function() {
    console.log(num);
    if (num === 0) {
      return 0;
    }
    return synchronizedCounter(num - 1);
  }, 1000);
}
synchronizedCounter(8);
