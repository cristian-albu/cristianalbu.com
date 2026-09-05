package insert3

func Solution(nums []int) []int {
	var arr [100]int
	min := nums[0]
	n := len(nums)

	for i := 0; i < n; i++ {
		curr := nums[i]
		arr[i] = curr
		if curr < min {
			min = curr
		}
	}

	for i := 0; i < n; i++ {
		if arr[i] == min {
			for j := n; j > i; j-- {
				arr[j] = arr[j-1]
			}
			n++
			i++
		}
	}

	return arr[0:n]
}

func Solution2(nums []int) []int {
	min := nums[0]
	for _, v := range nums {
		if v < min {
			min = v
		}
	}
	result := make([]int, 0, len(nums)*2)
	for _, v := range nums {
		result = append(result, v)
		if v == min {
			result = append(result, v)
		}
	}
	return result
}
