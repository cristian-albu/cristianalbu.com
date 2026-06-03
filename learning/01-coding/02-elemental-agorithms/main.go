package main

import (
	gaussum "elalgo/02-gauss-sum"
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

	fmt.Println(gaussum.Solution(n))

}
