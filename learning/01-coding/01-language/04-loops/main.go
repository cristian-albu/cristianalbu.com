package main

import "fmt"

func main() {

	// classic
	for i := 0; i < 5; i++ {
		fmt.Println(i)
	}

	// while loop
	n := 1

	for n < 100 {
		n *= 2
		fmt.Println(n)
	}

	// infinite loop
	for {
		fmt.Println("Run forever until break")
		break
	}

	// range
	for index, char := range "Hello" {
		fmt.Printf("Index %d char %c\n", index, char)
	}

	// labels for loops
outerloop:
	for i := 0; i < 3; i++ {
		for j := 0; j < 3; j++ {
			if i == 1 && j == 1 {
				fmt.Println("Break")
				break outerloop
			}
			fmt.Printf("i: %d, j:%d\n", i, j)
		}
	}
}
