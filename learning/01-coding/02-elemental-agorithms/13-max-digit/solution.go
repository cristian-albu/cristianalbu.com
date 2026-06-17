package maxdigit

func Solution(n int) int {

	max := 0
	num := n

	for {
		if num == 0 {
			break
		}

		curr := num % 10
		num /= 10

		if curr > max {
			max = curr
		}

	}

	return max
}
