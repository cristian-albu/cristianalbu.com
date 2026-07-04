package deleteelement

func Solution(nums []int, p int) []int {
	nums = append(nums[:p-1], nums[p:]...)
	return nums
}

func Solution2(nums []int, p int) []int {
	lastElem := len(nums) - 1

	for i := 0; i < lastElem; i++ {
		if i <= p {
			continue
		}

		nums[i] = nums[i+1]
	}

	return nums[:lastElem]
}
