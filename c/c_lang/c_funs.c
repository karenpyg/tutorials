#include <stdio.h>
#include <string.h>

int main () {
// declare and initialize two array
   int a[2]={1,2}; 
   int b[2]={3,4};
   printf("The data in destination before memcpy occurs\n");
// display array elements before copy
   for(int i=0;i<2;i++){
       printf("%d\t",a[i]);
   }
// copy array elements stored in the memory of b to the memory of a
   memcpy(a, b, sizeof(int)*2);
   printf("\nThe data in destination after memcpy occurs\n");
// display array elements after copy
   for(int i=0;i<2;i++){
       printf("%d\t",a[i]);
   }
   return(0);
}