package evenintervaldivisors

import (
	"fmt"
	"math"
)

func findNumOfEvenDivisors(n int) int {
	counter := 0
	limit := int(math.Sqrt(float64(n)))

	for i := 1; i <= limit; i++ {
		if n%i != 0 {
			continue
		}

		curr := n / i

		if curr != i && curr%2 == 0 {
			counter++
		}

		if i%2 == 0 {
			counter++
		}
	}

	return counter
}

func Solution(n, m int) string {
	nrd := 0
	min := 0
	max := 0

	if n%2 != 0 {
		n++
	}

	for i := n; i <= m; i += 2 {
		curr := findNumOfEvenDivisors(i)

		if curr > nrd {
			min = i
			nrd = curr
			max = i
		}

		if curr == nrd {
			max = i
		}

	}

	return fmt.Sprintf("%d %d %d", nrd, min, max)
}
