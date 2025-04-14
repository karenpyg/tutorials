#!/bin/bash



greet() {
	local name="$1" 
	echo "hello, $name! welcome!"
} 

greet "Maria"

add() {
	local num1=$1
	local num2=$2
	local sum=$((num1 + num2)) 
	echo "sum of $num1 and $num2 is $num3"
}

divide() {
	local num1=$1
	local num2=$2 
	
	if [ $num2 -eq 0 ]; then 
		echo "Error: division by zero"
		exit 1 
	fi 
	local result=$(bc <<< "scale=2; $num1 / $num2")
}


factorial() {
	local $num1
	local $result=1
	if [ $num1 -lt 0 ]; then 
		ehco "error" 
		exit 1 
	fi 

	for ((i = 1; i <= num1; i++)); do 
		result=$((result * i))
	done 
 

factorial(){
	local num1=$1
	local $result=1
	if [ $num1 -lt 0 ]; then
        echo "error" 
		exit 1 
	fi 

	for ((i = 1; i <= num1; i++)); do 
	result=$((result * i))
	do 


}

colors=('red' 'blue' 'green')

factorial 8


