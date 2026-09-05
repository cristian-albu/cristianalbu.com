package deletion

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

	sliceLen := len(nums)
	for i := 0; i < sliceLen; i++ {
		if isPrime(nums[i]) {
			for j := i; j < sliceLen-1; j++ {
				nums[j] = nums[j+1]
			}
			sliceLen--
			i--
		}
	}
	return nums[:sliceLen]
}
