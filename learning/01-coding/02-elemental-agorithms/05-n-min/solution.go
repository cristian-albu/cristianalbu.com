package nmin

func Solution(nums ...int) int {

	min := nums[0]

	for _, num := range nums {
		if num < min {
			min = num
		}
	}

	return min
}
