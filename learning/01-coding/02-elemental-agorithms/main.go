package main

import (
	divisorsum "elalgo/14-divisor-sum"
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

	fmt.Println(divisorsum.Solution(n))

}
