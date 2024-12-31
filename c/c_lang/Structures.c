struct point{
    int x, y; 
}; 

typedef struct {
    int x; 
    int y; 
} another_point; 

// can come in handy when dealing with structs and pointers, 
// this will allow us to define a new pint like this 

void addone(int *n){
    (*n) ++ ;

}

int main(){

    int n; 
    printf("%d\n",n); 
    addone(&n); 
    printf("after incrementing by reference\n", n); 

}
