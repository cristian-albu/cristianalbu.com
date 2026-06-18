package divisorsummirror

import (
	"fmt"
	"math"
	"strconv"
	"strings"
)

func Solution(nums string) int {
	data := strings.Split(nums, " ")
	sum := 0
	for _, num := range data {
		curr, err := strconv.Atoi(num)
		if err != nil {
			fmt.Println("Error parsing input")
			return -1
		}
		newNum := 0
		for curr != 0 {
			digit := curr % 10
			if newNum == 0 {
				newNum = digit
			} else {
				newNum = newNum*10 + digit
			}
			curr /= 10

		}
		divisorSum := 0
		limit := int(math.Sqrt(float64(newNum)))
		for i := 1; i <= limit; i++ {
			if newNum%i != 0 {
				continue
			}
			divisor := newNum / i
			if divisor != i {
				divisorSum += divisor
			}
			divisorSum += i
		}
		sum += divisorSum
	}

	return sum
}
