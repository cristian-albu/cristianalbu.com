package evensum

func Solution(n int) int {
	sum := n * 2
	for i := 2; i < n*2; i += 2 {
		sum += i
	}
	return sum
}
