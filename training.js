// Largest number function
function largestNumber() {
	return Math.max(11,-2,23,4);
};
console.log(largestNumber());

// Longest string function
function longestString(x,y) {
	var x = '2341312134'; 
    var y = '@#$%^&**((*&^'; 
  if (x.length > y.length) {
  	return "x is a longer string";
  }
  else {
  	return "y is a longer string";
  };
};
console.log(longestString());

// Decreasing number function

function countdown(num) {
	while (num >= 0) {
		console.log(num);
		num --;}
	};
console.log(countdown(8));

// Counting to number function

function simpleCounter(n) {
	let i = 0
	while (i <= n) {
		console.log(i);
		i++;
	};
};
console.log(simpleCounter(4));

// Counting between two defined numbers function

function counter(x,y) {
	for (let i = x; i <= y; i++) {
  		console.log(i);
	};
};
console.log(counter(8,23));

// Counting between two non-ordinated numbers

function advancedCounter(x,y) {
	for (let i = y; i >=x; i++) {
		console.log(i);
	};
};
console.log(advancedCounter(23,8));

// Counting from 0 to a number each second

function synchronizedCounter(num) {
	let i = 0
	while (i <= num) {
		console.log(i);
		i++;
	}
}
console.log(setInterval(synchronizedCounter(12, 1000)));
