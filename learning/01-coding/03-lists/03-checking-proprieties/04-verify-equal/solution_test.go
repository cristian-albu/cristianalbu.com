package verifyequal

import "testing"

func TestSuite(t *testing.T) {

	data := []struct {
		Input    []int
		Expected bool
	}{
		{Input: []int{6, 6, 6, 6, 4, 6, 6}, Expected: false},
		{Input: []int{6, 6, 6, 6, 6}, Expected: true},
		{Input: []int{5}, Expected: true},
		{Input: []int{1, 2}, Expected: false},
	}

	for _, th := range data {
		result := Solution(th.Input)

		if result != th.Expected {
			t.Errorf("Expected %v but got %v", th.Expected, result)
		}
	}

}
