<?php 
# If we list all the natural numbers below 10 that are multiples 
# of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Find the sum of all the multiples of 3 or 5 below 1000.

# Initialize  index and an total variables to hold answers
$i = 1;
$total = 0;

# For each number from 1 to 1000, check to see if it has a remainder
# of 0 if divided by either 3 or 5 and add it to total. 

for ($i = 1; $i < 1000; $i++) {
    if ($i % 3 == 0 OR  $i % 5 == 0) { 
		$total += $i;
	}
} 

# Print total when the loop is complete
echo $total;

?>