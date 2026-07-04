package primeexists

import "testing"

func TestSuite(t *testing.T) {

	data := []struct {
		Input    []int
		Expected bool
	}{
		{Input: []int{21, 8, 6, 10, 8}, Expected: false},
		{Input: []int{21, 8, 6, 10, 7}, Expected: true},
		{Input: []int{1}, Expected: false},
		{Input: []int{2}, Expected: true},
	}

	for _, th := range data {
		result := Solution(th.Input)

		if result != th.Expected {
			t.Errorf("Expected %v but got %v", th.Expected, result)
		}
	}

}
