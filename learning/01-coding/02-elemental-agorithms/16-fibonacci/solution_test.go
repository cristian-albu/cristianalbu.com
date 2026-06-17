package fibonacci

import "testing"

func TestSuite(t *testing.T) {

	data := []struct {
		Input    int
		Expected string
	}{
		{Input: 1, Expected: "1"},
		{Input: 2, Expected: "1 1"},
		{Input: 3, Expected: "1 1 2"},
		{Input: 4, Expected: "1 1 2 3"},
		{Input: 5, Expected: "1 1 2 3 5"},
		{Input: 6, Expected: "1 1 2 3 5 8"},
		{Input: 7, Expected: "1 1 2 3 5 8 13"},
		{Input: 8, Expected: "1 1 2 3 5 8 13 21"},
		{Input: 9, Expected: "1 1 2 3 5 8 13 21 34"},
	}

	for _, th := range data {
		res := Solution(th.Input)

		if res != th.Expected {
			t.Errorf("Expected result to be %s but got %s", th.Expected, res)
		}
	}

}
