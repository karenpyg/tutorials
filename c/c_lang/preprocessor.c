#include <stdio.h>
#define PI 3.1415

// functions like Macros : 
#define circle_area (3.14 *(r)*(r)) 

#if expression
    // conditional codes if expression is non-zero
#elif expression1
    // conditional codes if expression is non-zero
#elif expression2
    // conditional codes if expression is non-zero
#else
    // conditional if all expressions are 0
#endif

int main(){
    printf("current time is : %s", __TIME__); 
    
}