package odddigitsproduct

func Solution(n int) int {

	var res = 1

	num := n

	for {
		if num == 0 {
			break
		}

		curr := num % 10
		num /= 10

		if curr%2 != 0 {
			res *= curr
		}

	}

	if res == 1 {
		return -1
	}

	return res
}
