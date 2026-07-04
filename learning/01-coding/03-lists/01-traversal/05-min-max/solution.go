package minmax

func Solution(nums []int) [2]int {

	output := [2]int{nums[0], nums[0]}

	for _, num := range nums {

		if num > output[1] {
			output[1] = num
		}

		if num < output[0] {
			output[0] = num
		}
	}
	return output
}
