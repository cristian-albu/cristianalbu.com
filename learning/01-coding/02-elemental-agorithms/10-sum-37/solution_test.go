package sum37

import "testing"

func TestSuite(t *testing.T) {

	data := []struct {
		Input    int
		Expected int
	}{
		{Input: 3590, Expected: 8},
		{Input: 144620, Expected: 14},
		{Input: 37, Expected: 10},
		{Input: 28, Expected: 0},
	}

	for _, th := range data {
		res := Solution(th.Input)

		if res != th.Expected {
			t.Errorf("Expected result to be %d but got %d", th.Expected, res)
		}
	}

}
