package digitssum

import "testing"

func TestSuite(t *testing.T) {
	data := []struct {
		Input    int
		Expected int
	}{
		{Input: 2705, Expected: 14},
		{Input: 1234, Expected: 10},
		{Input: 1, Expected: 1},
		{Input: 23, Expected: 5},
	}

	for _, th := range data {
		result := Solution(th.Input)

		if th.Expected != result {
			t.Errorf("Expected %d but got %d", th.Expected, result)
		}
	}
}
