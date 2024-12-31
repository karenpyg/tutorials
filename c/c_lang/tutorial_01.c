#include <stdio.h>
#include <stdlib.h>
#include <string.h>


int main()
{
    char first_name[15] = "ANTHONY"; 
    // NULL charachter '\0' is required at end in this declaration 
    char first_name_sep[15] = {'a', 'n', 't', 'h', 'o', 'n', 'y', '\0'}; 

    char string_01 [6] = "hello"; // + "NULL" of course 
    char string_02 [] = "world"; // also takes up 6 

    // mind the single quotes and the null char in the end
    char string_03 [6] = {'h', 'e', 'l', 'l', 'o', '\0'}; 

    // gets() ignores whitespaces it stops reading when it reaches \n 
    printf("full name :"); 
    char full_name_02[25]; 
    gets(full_name_02); 
    printf("full name is : %s", full_name_02);
    // fgets reads a specified amount: 
    char name_01[10]; 
    fgets(name_01, 10, stdin); 


    // string library 
    char r_string_01[15] = "hello"; 
    char r_string_02[15] = "world";
    char r_string_03[15]; 
    int val; 

    val = strcmp(r_string_01, r_string_02); 
    if (val ==0 ){
        printf("strings are equal\n");
    }
    else{
        printf("strings are note equal \n"); 
    }

    // string or char, 
    // to take a single character 
    char ch ; 
    scanf("%c", &ch); 
    printf("%c", ch);
    // until finding the next space
    char string_04;  
    scanf("%s", &string_04); 
    // for taking one line as an input you can use(where special_s is defined as:)
    char special_s[TMP_MAX]; // special_s[MAX_LEN]
    scanf("%[^\n]%*c", special_s); 
    





    // memory allocation:
    int *p1 = malloc(4 * sizeof(int)); 
    int *p2 = malloc(sizeof(int[4])); 
    int *p3 = malloc(4* sizeof *p3);

    // populate the array  
    if(p1) {
        for (int n=0; n<4; ++n){
            p1[n] = n*n; 
        }
        for (int n=0; n<4; ++n){
            printf("p1[%d] == %d\n",n, p1[n]);
    } 
    }

    free(p1); 
    free(p2);
    free(p3);

    char *s; 
    s = malloc(1024 * sizeof(char)); 
    scanf("%[^\n]", s); 
    s = realloc(s, strlen(s) +1);
    int len = strlen(s); 
    for (int i = 0; i < len; i++){
        if(s[i] == ' '){
            printf("\n"); 
        } else{
            printf("%c", s[i]); 
        }
    }
    free(s); 
    return 0;  

    // digit frequency count : 
    char *s;
    s = malloc(1024 * sizeof(char));
    scanf("%s", s);
    s = realloc(s, strlen(s) + 1);
    int len = strlen(s), i;
    int arr[10];
    for(i = 0; i < 10; i++)
        arr[i] = 0;
    for(i = 0; i < len; i++) {
        if(s[i] >= '0' && s[i] <= '9') {
            arr[(int)(s[i] - '0')]++;
        }
    }
    for(i = 0; i < 10; i++)
        printf("%d ", arr[i]);
    printf("\n");
    free(s);
    return 0;



}

