package main

import (
	"fmt"
	"time"
)

func main() {

	age := 25

	if age < 18 {
		fmt.Println("Under")
	} else if age == 18 {
		fmt.Println("Exact")
	} else {
		fmt.Println("Over")
	}

	// variable can be declared but must be used. Vairable is scoped to if block

	if newVar := fmt.Sprintf("Something with %d", 5); newVar == "Something with 5" {
		fmt.Println("True")
	}

	switch day := time.Now().Weekday(); day {
	case time.Saturday, time.Sunday:
		fmt.Println("Weekend")
		fallthrough // force next block execution
	case time.Monday:
		fmt.Println("First day")
	default:
		fmt.Println("Regular")
	}

	// no condition switch

	score := 85

	switch {
	case score >= 90:
		fmt.Println("A")
	case score >= 80:
		fmt.Println("B")
	default:
		fmt.Println("C")
	}

}
