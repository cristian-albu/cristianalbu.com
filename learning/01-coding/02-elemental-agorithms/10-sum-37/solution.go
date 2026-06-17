package sum37

func Solution(n int) int {

	var sum = 0

	num := n

	for {

		if num == 0 {
			break
		}

		curr := num % 10
		num /= 10

		if curr >= 3 && curr <= 7 {
			sum += curr
		}
	}

	return sum
}
