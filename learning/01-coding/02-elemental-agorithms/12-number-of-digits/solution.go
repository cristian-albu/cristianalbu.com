package numberofdigits

func Solution(n int) int {
	total := 0
	num := n

	for {
		if num == 0 {
			break
		}
		num /= 10
		total++
	}

	return total
}
