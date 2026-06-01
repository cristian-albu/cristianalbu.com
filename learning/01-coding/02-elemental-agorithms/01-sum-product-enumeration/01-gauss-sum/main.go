package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	args := os.Args[1:]

	if len(args) == 0 {
		fmt.Println("No args")
		return
	}

	arg := args[0]

	n, err := strconv.Atoi(arg)
	if err != nil {
		fmt.Println("Not a valid integer", n)
		return
	}

	fmt.Println(Solution(n))

}

func Solution(n int) int {
	sum := n
	for i := range n {
		sum += i
	}

	return sum
}
