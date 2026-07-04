package insertelement

func Solution(nums []int, x int, p int) []int {
	nums = append(nums[:p-1], append([]int{x}, nums[p-1:]...)...)

	return nums
}

func Solution2(nums []int, x int, p int) []int {
	nums = append(nums, 0) // extend cap

	for i := len(nums) - 1; i > 0; i-- {
		if i > p-1 {
			nums[i] = nums[i-1]
		}
	}

	nums[p-1] = x

	return nums
}
