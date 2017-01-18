// # If we list all the natural numbers below 10 that are multiples 
// # of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// # Find the sum of all the multiples of 3 or 5 below 1000.

// # Initialize variables: an adder as a function and a sum to add iteratively
const adder = (num) => {
	let sum = 0;

	// # For each number from 1 to num, check to see if it has a remainder
	// # of 0 if divided by either 3 or 5 and add it to total. 

	for (var i = 0; i < num; i++) {
	 	if (i % 3 == 0 ||  i % 5 == 0) sum+=i;
	 } 
	
	return sum;
}
// # call adder on 1000
adder(1000);
