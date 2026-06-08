package summaxmin

import "testing"

func TestSuite(t *testing.T) {
	data := []struct {
		Input    []int
		Expected int
	}{
		{Input: []int{7, 6, 9, 6, 8}, Expected: 3},
		{Input: []int{1, 2, 3, 4}, Expected: 3},
		{Input: []int{0, 0, 0, 0}, Expected: 0},
		{Input: []int{99, 98, 19}, Expected: 80},
	}

	for _, th := range data {
		result := Solution(th.Input...)

		if th.Expected != result {
			t.Errorf("Expected %d but got %d", th.Expected, result)
		}
	}
}
