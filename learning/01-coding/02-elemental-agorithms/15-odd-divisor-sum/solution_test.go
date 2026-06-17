package odddivisorsum

import (
	"fmt"
	"testing"
)

var sink int

var data = []struct {
	Input    int
	Expected int
}{
	{Input: 30, Expected: 24},
	{Input: 17, Expected: 18},
	{Input: 64, Expected: 1},
	{Input: 12, Expected: 4},
	{Input: 7, Expected: 8},
	{Input: 2, Expected: 1},
	{Input: 15, Expected: 24},
	{Input: 1, Expected: 1},
	{Input: 3, Expected: 4},
	{Input: 5, Expected: 6},
	{Input: 9, Expected: 13},
	{Input: 25, Expected: 31},
	{Input: 999983, Expected: 999984},
	{Input: 720720, Expected: 104832},
}

func failOutput(t *testing.T, input, expected, result int) {

	if result != expected {
		t.Errorf("Expected result for %d to be %d but got %d", input, expected, result)

	}

}

func TestSuite1(t *testing.T) {
	for _, th := range data {
		res := Solution(th.Input)
		failOutput(t, th.Input, th.Expected, res)
	}
}

func TestSuite2(t *testing.T) {
	for _, th := range data {
		res := Solution2(th.Input)
		failOutput(t, th.Input, th.Expected, res)
	}
}

func Benchmark1(b *testing.B) {
	for _, n := range data {
		b.Run(fmt.Sprintf("Input: %d", n.Input), func(b *testing.B) {
			for i := 0; i < b.N; i++ {
				sink = Solution(n.Input)
			}
		})
	}
}

func Benchmark2(b *testing.B) {
	for _, n := range data {
		b.Run(fmt.Sprintf("Input: %d", n.Input), func(b *testing.B) {
			for i := 0; i < b.N; i++ {
				sink = Solution2(n.Input)
			}
		})
	}
}
