package main

import (
	"errors"
	"fmt"
)

// basic syntax
func multiply(x int, y int) int {
	return x * y
}

func add(a, b int) int {
	return a + b
}

// multiple return values
func divide(a, b int) (int, error) {
	if b == 0 {
		return 0, errors.New("cannot divide by zero")
	}

	return a / b, nil
}

// names return values
func getRectagleProps(length, width float64) (area float64, perimiter float64) {
	area = length * width
	perimiter = 2 * (length * width)

	return // auto returns the named values
}

// variadic functions
func sumTotal(nums ...int) int {
	total := 0

	for _, num := range nums {
		total += num
	}

	return total
}

// anonymous functions and closures
func parentFn() func(string) {

	childFn := func(name string) {
		fmt.Println("Hello, ", name)
	}

	func(msg string) {
		fmt.Println("Inline message: ", msg)
	}("Run me")

	return childFn
}

// receiver functions
type User struct {
	Name  string
	Email string
}

func (u User) Notify() {
	fmt.Printf("Sending email to %s at %s\n", u.Name, u.Email)
}

func main() {

	fmt.Println(multiply(3, 3))
	fmt.Println(add(1, 2))

	result, err := divide(10, 2)
	if err != nil {
		fmt.Println("Error: ", err)
	} else {
		fmt.Println(result)
	}

	area, perimiter := getRectagleProps(20, 15)

	fmt.Println(area, perimiter)

	fmt.Println(sumTotal(1, 2, 3, 4, 5))

	childFn := parentFn()
	childFn("Tom")

	usr := User{Name: "Bob", Email: "bob@example.com"}

	usr.Notify()

}
