package expression2

import "testing"

func TestSuite(t *testing.T) {

	data := []struct {
		Input    int
		Expected int
	}{
		{Input: 1, Expected: 2},
		{Input: 2, Expected: 8},
		{Input: 3, Expected: 20},
		{Input: 4, Expected: 40},
		{Input: 5, Expected: 70},
		{Input: 50, Expected: 44200},
		{Input: 100, Expected: 343400},
	}

	for _, th := range data {
		res := Solution(th.Input)

		if res != th.Expected {
			t.Errorf("Expected %d but got %d", th.Expected, res)
		}

	}
}
