package odddigitsproduct

import "testing"

func TestSuite(t *testing.T) {

	data := []struct {
		Input    int
		Expected int
	}{
		{Input: 2705, Expected: 35},
		{Input: 3, Expected: 3},
		{Input: 2, Expected: -1},
		{Input: 46, Expected: -1},
		{Input: 333, Expected: 27},
	}

	for _, th := range data {
		res := Solution(th.Input)

		if res != th.Expected {
			t.Errorf("Expected result to be %d but got %d", th.Expected, res)
		}
	}

}
