package divisorsum

import (
	"math"
)

func Solution(n int) int {
	if n == 1 {
		return 1
	}

	sum := 0
	max := int(math.Sqrt(float64(n)))

	for i := 1; i <= max; i++ {
		if n%i == 0 {
			if n/i == i {
				sum += n / i
			} else {
				sum += n/i + i
			}
		}
	}

	return sum
}
