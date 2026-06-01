package main

import "fmt"

const CONSTANTS_VAR = 3.14

const (
	A = "First"
	B = "Second"
	C = "Third"
)

func main() {

	// typed vars. Type can be omitted then they become untyped var
	var intvar int = 10         // integer. Can also be int8, int16, int32, int64 or uint (all variations)
	var boolvar bool = true     // boolean
	var floatvar float32 = 3.14 // floating point number (can be 32 or 64)
	var stringvar string = "Hello World"
	var runevar rune = 'h'        // int32 in all ways just used to distinguish between chars and other ints
	var bytevar byte = 0b00010011 // equivalent of uint8

	inferredvar := "Hello again"
	// inferred but can only be used inside functions.
	// Also declaration and assignment must be done at the same time

	x, y, z := 23, 6.28, true // multiple declarations per line

	fmt.Print(CONSTANTS_VAR, " ", A, " ", B, " ", C, "\n")     // normal
	fmt.Println(intvar, boolvar, floatvar, stringvar, bytevar) // add whitesapce between args and newline

	fmt.Printf("String: %s, int: %d, float: %f, boolean: %t, char: %c \n", inferredvar, x, y, z, runevar)
	// formats arguments and then prints them

	formated := fmt.Sprintf("This is a number: %d", 10)

	fmt.Println(formated)
}
