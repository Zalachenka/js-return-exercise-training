// Largest number function
function max(toto, titi) {
  return toto > titi ? toto : titi;
}
function largestNumber(x, y, z, k) {
  const firstBiggest = max(x, y);
  const secondBiggest = max(z, k);
  return max(firstBiggest, secondBiggest);
}
largestNumber();

// Longest string function
function longestString(a, b) {
  return a.length > b.length ? a : b;
}
longestString();

// Decreasing number function

function countdown(n) {
  console.log(n);
  if (n >= 0) {
    countdown(n - 1);
  }
}

// Counting to number function

function simpleCounter(currentNum, limit) {
  console.log(currentNum);
  if (currentNum < limit) {
    return simpleCounter(currentNum + 1, limit);
  }
}
function counterWrapper(x) {
  simpleCounter(0, x);
}
console.log(counterWrapper(8));

// Counting between two defined numbers function

function counter (x,y) {
  if (x<y) {
      console.log(x);
      return counter(x+1; y)
  }
}
console.log(1,5)

// Counting between two non-sorted numbers

function advancedCounter (x,y) {
  if (x<y) {
      counter(x,y)
  }
  else  {
      counter(y,x)
  }
}
advancedCounter(10,6)
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
