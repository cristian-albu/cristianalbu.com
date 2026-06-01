package main

import (
	"fmt"
	"math"
)

// structs are state of an object, interfaces are the behavior. Its a contract

type Shape interface {
	Area() float64
}

type Circle struct {
	Radius float64
}

type Rectangle struct {
	Width  float64
	Height float64
}

// circle implements Shape
func (c Circle) Area() float64 {
	return math.Pi * c.Radius * c.Radius
}

// rectangle implements shape
func (r Rectangle) Area() float64 {
	return r.Width * r.Height
}

func printArea(s Shape) {
	fmt.Printf("The area is: %f\n", s.Area())
}

// empty interface (any)
func printAnything(value any) {
	fmt.Println(value)
}

// notable difference of using interfaces best practices from other languages
// In go it is better to define it where you use it not where you implement it.
// So for the example above, if you would split the files you would define it in the printArea file not in
// the Circle and Rectangle files

func main() {

	c := Circle{Radius: 5}
	r := Rectangle{Width: 4, Height: 5}

	printArea(c)
	printArea(r)

	printAnything(42)
	printAnything("Hello")
	printAnything(Circle{5})

}
