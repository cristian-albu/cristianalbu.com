package main

import (
	"fmt"
	ex "modules-and-packages/examples"
)

// PACKAGE = a directory containing one or more .go source files. Every
// go file must declare the package it belongs to on line 1

// MODULE = an entire project

// WORKSPACE = a project with multiple sub-modules. You need a go.work file that defines it otherwise it is hard to run

func main() {

	fmt.Println("Hello from main")

	ex.SomePublicFn() // accessible
	// example.somePrivateFn() not accessile
	ex.PublicFn2() // accessible
}
