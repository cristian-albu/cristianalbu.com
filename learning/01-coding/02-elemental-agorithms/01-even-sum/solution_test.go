package evensum

import "testing"

func TestSuite(t *testing.T) {

	data := []struct {
		Input    int
		Expected int
	}{
		{Input: 2, Expected: 6},
		{Input: 4, Expected: 20},
		{Input: 10, Expected: 110},
		{Input: 48, Expected: 2352},
	}

	for _, th := range data {
		result := Solution(th.Input)

		if result != th.Expected {
			t.Errorf("Expected %d but got %d", th.Expected, result)
		}
	}

}
