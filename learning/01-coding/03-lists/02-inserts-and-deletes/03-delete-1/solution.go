package delete1

func Solution(nums []int) []int {

	delCounter := 0

	for i := 0; i < len(nums)-delCounter; i++ {
		if nums[i]%2 == 0 {
			delCounter++

			for j := i; j < len(nums)-delCounter; j++ {
				nums[j] = nums[j+1]
			}

			i--
		}

	}

	return nums[:len(nums)-delCounter]
}
