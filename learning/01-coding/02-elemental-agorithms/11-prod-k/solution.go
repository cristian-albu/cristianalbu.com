package prodk

func Solution(n, k int) int {

	var product = 1
	num := n

	var wasFound = false

	for {
		if num == 0 {
			break
		}

		curr := num % 10
		num /= 10

		if curr != k {
			product *= curr
			wasFound = true
		}
	}

	if wasFound == true {
		return product
	}

	return 0
}
