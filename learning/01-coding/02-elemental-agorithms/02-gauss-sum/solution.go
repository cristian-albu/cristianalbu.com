package gaussum

func Solution(n int) int {
	sum := n
	for i := range n {
		sum += i
	}

	return sum
}
