package main

import "fmt"

func main() {

	// arithmetic operators
	a := 1 + 2
	b := 2 - 1
	c := 3 * 3
	d := 4 / 2
	e := 3 % 2

	a++
	b--

	// relational comparison operations
	fmt.Println(a == b, c != b)
	fmt.Println(d > e, d < e, d >= e, d <= e)

	// logical operators
	fmt.Println(a > b && e > d)
	fmt.Println(a > 0 || b > 0)
	fmt.Println(!(a < b))

	// assignment operators

	var x = 1
	y := x
	y += 1
	y -= 1
	y *= 6
	y /= 2
	y %= 2

	fmt.Println(y)

	// bitwise operators will be later &, |, ^, <<, >>, &^

}
