package summaxmin

func Solution(nums ...int) int {

	max := nums[0]
	min := nums[0]

	for _, num := range nums {
		if num > max {
			max = num
		}

		if num < min {
			min = num
		}
	}

	return max - min
}
