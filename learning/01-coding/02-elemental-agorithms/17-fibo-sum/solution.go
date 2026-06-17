package fibosum

import "fmt"

func Solution(n int) string {
	output := ""

	limit := n
	a, b := 0, 1

	for {
		temp := a + b
		a = b
		b = temp

		if temp == limit {
			output = fmt.Sprintf("%s %d", output, temp)
			break
		}

		if temp > limit {
			output = fmt.Sprintf("%s %d", output, a)
			limit = limit - a
			a, b = 0, 1
		}
	}

	return output[1:]
}

func Solution2(n int) string {
	a, b := 0, 1

	for b <= n {
		a, b = b, a+b
	}

	output := fmt.Sprintf("%d", a)
	remainder := n - a

	for remainder > 0 {
		a, b = b-a, a

		if a <= remainder {
			output = fmt.Sprintf("%s %d", output, a)
			remainder -= a
		}
	}

	return output
}
