package prefixsum

func Solution(n int) int {

	sum := 0
	num := n

	for {
		sum += num
		num /= 10
		if num == 0 {
			break
		}
	}

	return sum
}
