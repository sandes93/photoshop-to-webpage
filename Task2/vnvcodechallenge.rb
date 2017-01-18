# If we list all the natural numbers below 10 that are multiples 
# of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Find the sum of all the multiples of 3 or 5 below 1000.

# Initialize variables: an index as a counter and an array to hold valid integers
i = 1
arrDivisible = []

# For each number from 1 to 1000, check to see if it has a remainder
# of 0 if divided by either 3 or 5 and add it to total. 

while i < 1000  do
   if i % 3 == 0 ||  i % 5 == 0 then 
		arrDivisible.push(i)
	end
   i +=1
end

# Reduce total array into the sum of all values in the array
puts arrDivisible.reduce(0,:+)