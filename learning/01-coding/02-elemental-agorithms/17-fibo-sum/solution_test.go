package fibosum

import (
	"fmt"
	"testing"
)

var sink string

var data = []struct {
	Input    int
	Expected string
}{
	{Input: 1, Expected: "1"},
	{Input: 2, Expected: "2"},
	{Input: 4, Expected: "3 1"},
	{Input: 10, Expected: "8 2"},
	{Input: 50, Expected: "34 13 3"},
	{Input: 100, Expected: "89 8 3"},
	{Input: 987, Expected: "987"},
	{Input: 1000000000, Expected: "701408733 267914296 24157817 5702887 514229 196418 75025 28657 1597 233 89 13 5 1"},
}

func TestSuite(t *testing.T) {
	t.Run("Solution 1", func(t *testing.T) {
		for _, th := range data {
			res := Solution(th.Input)

			if res != th.Expected {
				t.Errorf("Expected result to be %s but got %s", th.Expected, res)
			}
		}
	})

	t.Run("Solution 2", func(t *testing.T) {
		for _, th := range data {
			res := Solution2(th.Input)

			if res != th.Expected {
				t.Errorf("Expected result to be %s but got %s", th.Expected, res)
			}
		}
	})
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
