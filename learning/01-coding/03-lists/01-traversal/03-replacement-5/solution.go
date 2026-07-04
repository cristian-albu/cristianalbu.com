package replacement5

import (
	"math"
)

func isPrime(n int) bool {
	if n == 1 {
		return false
	}

	limit := int(math.Sqrt(float64(n)))

	for i := 2; i <= limit; i++ {
		if n%i == 0 {
			return false
		}
	}

	return true

}

func Solution(nums []int) []int {
	for i, num := range nums {
		if isPrime(num) {
			nums[i] = 0
		}
	}

	return nums
}
