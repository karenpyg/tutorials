#include <stdio.h>
#include <string.h>

struct Student 
{ 
    char name[50]; 
    int class; 
    char section; 
}; 

struct Point 
{
    int x, y; 
}; 

typedef struct Point sag; 



int main()
{
    struct Student student_01; 
    struct Point point_01; 

    sag p1; 
    // initializing st_01 : 
    strcpy(student_01.name, "Sasan khatar"); 
    student_01.class = 2; 
    student_01.section = "a"; 

    // some memset : 
    char str[50] = "an students job is to be fucked"; 
    memset(str+12, '.', 8*sizeof(char)); 


    return 0; 
}