package gaussum

import (
	"testing"
)

func TestSuite(t *testing.T) {
	tests := []struct {
		Input    int
		Expected int
	}{
		{Input: 0, Expected: 0},
		{Input: 2, Expected: 3},
		{Input: 7, Expected: 28},
		{Input: 10, Expected: 55},
		{Input: 11, Expected: 66},
	}

	for _, tc := range tests {
		result := Solution(tc.Input)

		if result != tc.Expected {
			t.Errorf("Expected %d but got %d", tc.Expected, result)
		}
	}

}
