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

function counter(n) {
	let i = 0
	while (i <= n) {
		console.log(i);
		i++;
	};
};
console.log(counter(4))