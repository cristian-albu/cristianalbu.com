package odddivisorsum

import (
	"math"
)

func Solution(n int) int {

	if n <= 2 {
		return 1
	}

	sum := 0

	limit := int(math.Sqrt(float64(n)))

	for i := 1; i <= limit; i++ {
		if n%i != 0 {
			continue
		}

		j := n / i

		if j != i && j%2 != 0 {
			sum += j
		}

		if i%2 != 0 {
			sum += i
		}

	}

	return sum
}

func Solution2(n int) int {
	for n%2 == 0 {
		n /= 2
	}

	sum := 0

	limit := int(math.Sqrt(float64(n)))

	for i := 1; i <= limit; i += 2 {
		if n%i != 0 {
			continue
		}

		j := n / i
		sum += i
		if j != i {
			sum += j
		}

	}

	return sum
}
