package verifyordered

import "testing"

func TestSuite(t *testing.T) {

	data := []struct {
		Input    []int
		Expected bool
	}{
		{Input: []int{4, 5, 7, 9, 9, 10, 12}, Expected: true},
		{Input: []int{5, 4, 3}, Expected: false},
		{Input: []int{5}, Expected: true},
		{Input: []int{1, 1, 1}, Expected: true},
	}

	for _, th := range data {
		result := Solution(th.Input)

		if result != th.Expected {
			t.Errorf("Expected %v but got %v", th.Expected, result)
		}
	}

}
