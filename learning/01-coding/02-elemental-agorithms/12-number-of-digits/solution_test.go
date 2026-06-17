package numberofdigits

import "testing"

func TestSuite(t *testing.T) {

	data := []struct {
		Input    int
		Expected int
	}{
		{Input: 123, Expected: 3},
		{Input: 1, Expected: 1},
		{Input: 2705, Expected: 4},
		{Input: 99999, Expected: 5},
	}

	for _, th := range data {
		res := Solution(th.Input)

		if res != th.Expected {
			t.Errorf("Expected result to be %d but got %d", th.Expected, res)
		}
	}

}
