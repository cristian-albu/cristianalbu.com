package digitssum

func Solution(n int) int {
	if n < 10 {
		return n
	}

	sum := 0
	num := n

	for {
		digit := num % 10
		sum += digit
		num = num / 10

		if num == 0 {
			break
		}

	}

	return sum
}
