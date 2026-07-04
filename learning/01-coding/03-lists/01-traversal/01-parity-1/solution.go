package parity1

func Solution(nums []int) int {

	odd := 0
	even := 0

	for _, num := range nums {
		if num%2 == 0 {
			even += 1
		} else {
			odd += 1
		}
	}

	if odd > even {
		return odd - even
	} else {
		return even - odd
	}
}
