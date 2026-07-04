package replacement6

import "math"

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

	isFound := false

	for i := len(nums) - 1; i >= 0; i-- {
		if !isFound && isPrime(nums[i]) {
			isFound = true
			nums[i] = 0
		}
	}

	return nums
}
