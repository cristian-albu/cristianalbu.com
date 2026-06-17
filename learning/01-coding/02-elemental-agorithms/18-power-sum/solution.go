package powersum

import "fmt"

func Solution(n int) string {
	isOdd := false

	if n%2 != 0 {
		isOdd = true
		n -= 1
	}

	output := ""

	for n > 0 {
		j := 2
		for j*2 <= n {
			j *= 2
		}
		n -= j
		output = fmt.Sprintf("%d %s", j, output)

	}

	if isOdd {
		output = fmt.Sprintf("1 %s", output)
	}

	return output[:len(output)-1]
}
