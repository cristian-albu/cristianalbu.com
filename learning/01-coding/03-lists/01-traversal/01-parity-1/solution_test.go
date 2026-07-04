package parity1

import "testing"

func TestSuite(t *testing.T) {

	data := []struct {
		Input    []int
		Expected int
	}{
		{Input: []int{15, 245, 28, 33, 11}, Expected: 3},
		{Input: []int{2, 4, 6, 8}, Expected: 4},
		{Input: []int{1, 3, 5, 7, 9}, Expected: 5},
		{Input: []int{1}, Expected: 1},
		{Input: []int{2}, Expected: 1},
	}

	for _, th := range data {
		result := Solution(th.Input)

		if result != th.Expected {
			t.Errorf("Expected %d but got %d", th.Expected, result)
		}
	}

}
