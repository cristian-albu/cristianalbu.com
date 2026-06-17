package prodk

import "testing"

func TestSuite(t *testing.T) {

	data := []struct {
		Input1   int
		Input2   int
		Expected int
	}{
		{Input1: 123242, Input2: 2, Expected: 12},
		{Input1: 478, Input2: 4, Expected: 56},
		{Input1: 23, Input2: 2, Expected: 3},
		{Input1: 12, Input2: 2, Expected: 1},
		{Input1: 1, Input2: 1, Expected: 0},
	}

	for _, th := range data {
		res := Solution(th.Input1, th.Input2)

		if res != th.Expected {
			t.Errorf("Expected result to be %d but got %d", th.Expected, res)
		}
	}

}
