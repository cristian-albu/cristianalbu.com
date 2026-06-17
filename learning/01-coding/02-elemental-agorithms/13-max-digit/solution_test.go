package maxdigit

import "testing"

func TestSuite(t *testing.T) {

	data := []struct {
		Input    int
		Expected int
	}{
		{Input: 2705, Expected: 7},
		{Input: 99, Expected: 9},
		{Input: 12345, Expected: 5},
		{Input: 1, Expected: 1},
	}

	for _, th := range data {
		res := Solution(th.Input)

		if res != th.Expected {
			t.Errorf("Expected result to be %d but got %d", th.Expected, res)
		}
	}

}
