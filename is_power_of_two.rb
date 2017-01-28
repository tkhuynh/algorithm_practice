# write a function name is_power_of_two? to check if any given number is a power of 2

=begin
	Logic
	This could be done with recursive or loop. But to be more efficient, we can you binary number
	Binary number of 1 or 2^0 is "1"
	Binary number of 2 or 2^1 is "10"
	Binary number of 4 or 2^2 is "100"
	and so on..
	So if the number is a power of 2, its binary number should be "1" or "1" following with numbers of "0" ONLY
=end

def is_power_of_two?(num)
	
end

is_power_of_two?(-1) 	#=> false
is_power_of_two?(1) 	#=> true
is_power_of_two?(2) 	#=> true
is_power_of_two?(19) 	#=> false
is_power_of_two?(32) 	#=> true