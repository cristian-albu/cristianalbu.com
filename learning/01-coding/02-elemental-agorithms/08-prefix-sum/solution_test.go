package prefixsum

import "testing"

func TestSuite(t *testing.T) {
	data := []struct {
		Input    int
		Expected int
	}{
		{Input: 12345, Expected: 13715},
		{Input: 123, Expected: 136},
		{Input: 89, Expected: 97},
	}

	for _, th := range data {
		result := Solution(th.Input)

		if th.Expected != result {
			t.Errorf("Expected %d but got %d", th.Expected, result)
		}
	}
}
