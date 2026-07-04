package display0

func Solution(nums []int) []int {

	last := nums[len(nums)-1]

	output := []int{}

	for _, num := range nums {
		if last%num == 0 || num%last == 0 {
			output = append(output, num)
		}
	}

	return output
}
