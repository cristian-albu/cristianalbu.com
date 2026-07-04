package oddexists

import "testing"

func TestSuite(t *testing.T) {

	data := []struct {
		Input    []int
		Expected bool
	}{
		{Input: []int{2, 8, 6, 10, 8}, Expected: false},
		{Input: []int{2, 8, 6, 10, 9}, Expected: true},
		{Input: []int{1}, Expected: true},
		{Input: []int{2}, Expected: false},
	}

	for _, th := range data {
		result := Solution(th.Input)

		if result != th.Expected {
			t.Errorf("Expected %v but got %v", th.Expected, result)
		}
	}

}
