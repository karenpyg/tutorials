#!/usr/bin/bash 

ip_addr=("8.8.8.8" "8.8.4.4" "208.67.222.222") # Replace with your desired IP addresses
count=1
for ip in "${ip_addr[@]}"; do
    if ping -c -q $count $ip > /dev/null 2&>1; then
        echo "ping to $ip was successfull"
    else
        echo "Ping to $ip failed."
    fi 
done 


# function print_arguments(){
#     if [-d "$1" || -d "$2"]; then
#         echo "one or both are empty"
#         return 
#     fi
#     echo "arg one:$1"
#     echo "arg two:$2" 
# }   

# print_arguments "booby" "second booby" 


