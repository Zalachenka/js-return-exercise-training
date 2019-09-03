// Largest number function
function largestNumber() {
	return Math.max(11,-2,23,4);
};
console.log(largestNumber());

// Longest string function
function longestString() {
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