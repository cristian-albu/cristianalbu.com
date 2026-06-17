package fibonacci

import "fmt"

func Solution(n int) string {
	output := "1"

	if n == 1 {
		return output
	}

	prev1, prev2 := 0, 1

	for i := 1; i < n; i++ {
		curr := prev1 + prev2
		prev1 = prev2
		prev2 = curr

		output = fmt.Sprintf("%s %d", output, curr)
	}

	return output
}
