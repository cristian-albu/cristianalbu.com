package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {

	args := os.Args[1:]

	if len(args) == 0 {
		fmt.Println("Error getting args")
		return
	}

	n, err := strconv.Atoi(args[0])

	if err != nil {
		fmt.Println("Arg is not of int type")
		return
	}

	fmt.Println(Solution(n))
}

func Solution(n int) int {
	sum := n * 2
	for i := 2; i < n*2; i += 2 {
		sum += i
	}
	return sum
}
