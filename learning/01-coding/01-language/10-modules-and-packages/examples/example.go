package examples

import "fmt"

func init() {
	fmt.Println("Runs automatically")
}

func SomePublicFn() {
	fmt.Println("Public fn")
}

func somePrivateFn() {
	fmt.Println("Private fn")
}
