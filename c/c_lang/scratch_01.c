
#include <stdio.h>

// 4 3
// 1 2
// 2 3
// 2 4
int main(){

    int V, E;
    scanf("%d %d",&V,&E);
    int adj[V][V];
    for(int i=0; i<E; i++){
        int m,n; 
        scanf("%d %d", &m, &n);
        // zero indexing 
        adj[m-1][n] = 1; 
        adj[n-1][m] = 1;

    }
    for (int i=0; i<V; i++){
        for (int j=0; j<V; j++){
            printf("%d ",adj[i][j]);
        }
    }

     


}

// int main(){
// 	int num;
// 	scanf("%d", &num);              	                  // Reading input from STDIN
// 	// printf("Input number is %d.\n", num);       // Writing output to STDOUT
//     for(int i = 0; i < num; i++){
//         int vertices, edges; 
//         scanf("%d %d", &vertices, &edges );
//         for(int j=0; j<edges; j++){
//             scanf("%d %d", v_1, v_2);
//         }
//     }
// }


// #include <stdio.h>
// #include <string.h>
// #include <math.h>
// #include <stdlib.h>


// #include <stdio.h>
// #include <stdlib.h>

// /*
//  * This stores the total number of books in each shelf.
//  */
// int* total_number_of_books;

// /*
//  * This stores the total number of pages in each book of each shelf.
//  * The rows represent the shelves and the columns represent the books.
//  */
// int** total_number_of_pages;



// int main(){
//     // total_number_of_pages[0][0] = 100; 
//     // printf("Total number of books %d\n", total_number_of_pages[0][0]);




// }


    // int num, *arr, i; 
    // scanf("%d", &num); 
    // arr = (int*)malloc(num* sizeof(int)); 
    // for(i = 0; i< num; i++){
    //     scanf("%d", arr + i); 
    // }
    // int* left_ptr = arr; 
    // int* right_ptr; 
    // int temp; 
    // for(i = 0; i<num; i++){
    //     if (i == num -1 ){
    //         right_ptr = (arr + i); 
    //     }
    // }

    // int x = 42; 
    // int* p = &x; 
    // int** q = &p; 
    // printf("p:%d    q:%d\n", *p, **q);  
    // *p = 2222; 
    // printf("q: %d\n", **q); 

    // int* an_int = (int *)malloc(sizeof(int));