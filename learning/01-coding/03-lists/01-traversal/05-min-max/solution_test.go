package minmax

import "testing"

func TestSuite(t *testing.T) {

	data := []struct {
		Input    []int
		Expected [2]int
	}{
		{Input: []int{8, 2, 9, 4, 5}, Expected: [2]int{2, 9}},
		{Input: []int{5}, Expected: [2]int{5, 5}},
		{Input: []int{1, 1, 1, 1}, Expected: [2]int{1, 1}},
		{Input: []int{100, 1, 50}, Expected: [2]int{1, 100}},
	}

	for _, th := range data {
		result := Solution(th.Input)

		if result != th.Expected {
			t.Errorf("Expected %v but got %v", th.Expected, result)
		}
	}

}
