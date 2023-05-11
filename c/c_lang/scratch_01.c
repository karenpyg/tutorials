#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>


int main()
{  
    int num, *arr, i; 
    scanf("%d", &num); 
    arr = (int*)malloc(num* sizeof(int)); 
    for(i = 0; i< num; i++){
        scanf("%d", arr + i); 
    }
    int* left_ptr = arr; 
    int* right_ptr; 
    int temp; 
    for(i = 0; i<num; i++){
        if (i == num -1 ){
            right_ptr = (arr + i); 
        }
    }

}