package expression2

func Solution(n int) int {
	var sum int

	for i := 1; i <= n; i++ {
		sum += i * (i + 1)
	}

	return sum
}
