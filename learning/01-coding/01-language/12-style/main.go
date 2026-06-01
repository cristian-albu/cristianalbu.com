package main

import (
	"fmt"
	"os"
)

func explicitErrorHandling() {
	_, err := os.ReadFile("file.txt")

	if err != nil {
		fmt.Println(err)
	}
}

type Greeter interface {
	Greet() string
}

type Person struct {
	Name string
}

func (p Person) Greet() string {
	return "Hello, " + p.Name
}

// idiomatic short variable names
func (p *Person) updateName(newName string) {
	p.Name = newName
}

func implicitInterfacesAndComposition(g Greeter) {
	fmt.Println(g.Greet())
}

func main() {

	explicitErrorHandling()

	p := Person{Name: "Cristian"}
	p.updateName("Christian")
	implicitInterfacesAndComposition(p)

	fmt.Println("Simple and boring. Easy to maintain, easy to understand, hard to overcomplicate")

}
