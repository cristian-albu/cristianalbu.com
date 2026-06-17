package divisorsum

import "testing"

func TestSuite(t *testing.T) {

	data := []struct {
		Input    int
		Expected int
	}{
		{Input: 1, Expected: 1},
		{Input: 4, Expected: 7},
		{Input: 6, Expected: 12},
		{Input: 12, Expected: 28},
		{Input: 7, Expected: 8},
		{Input: 36, Expected: 91},
		{Input: 100, Expected: 217},
		{Input: 117, Expected: 182},
	}

	for _, th := range data {
		res := Solution(th.Input)

		if res != th.Expected {
			t.Errorf("Expected result to be %d but got %d", th.Expected, res)
		}
	}

}
