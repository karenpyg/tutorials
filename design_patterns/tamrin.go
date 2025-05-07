package main 

import ( 
	"fmt"
	"maps"
)

type Door interface {
	getHeight() int 
	getWidth() int 
	getMaterial() map 
}

type WoodenDoor struct {
	height int 
	width int 
	material map
}

func NewWoodenDoor(height, width int, material map) *WoodenDoor {
	return &WoodenDoor{height: height, width: width, material: material}
}

func (w *WoodenDoor) getHeight() int {
	return w.height
}

func (w *WoodenDoor) getWidth() int {
	return w.width
}

func (w *WoodenDoor) getMaterial map {
	
}

// import (
// 	"fmt"
// 	// "slices"
// )

// func main() {
// 	var a[5] int 
// 	fmt.Println(a)
// 	var twoD [2][3]int 
// 	for i :=0; i<2; i++{
// 		for j :=0; j<3; j++{
// 			fmt.Printf("%d" ,twoD[i][j])
// 		}
// 	}

// 	var s []string 
// 	fmt.Println("un initialized", s, len(s) == 0, s == nil)

// 	s = make([]string, 3)
// 	s = append(s, "e", "f")
// 	fmt.Println("apd:   ", s)

// 	c := make([]string, len(s))
// 	copy(c, s) 

// 	twoDSlice := make([][]int, 3)
// 	for i :=0; i<3; i++{
// 		innerLen := i +1 
// 		twoDSlice[i] = make([]int, innerLen)
// 		for j :=0; j<innerLen; j
// 	}

// }


	

