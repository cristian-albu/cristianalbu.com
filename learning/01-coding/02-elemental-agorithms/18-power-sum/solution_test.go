package powersum

import "testing"

func TestSuite(t *testing.T) {

	data := []struct {
		Input    int
		Expected string
	}{
		{Input: 43, Expected: "1 2 8 32"},
		{Input: 11, Expected: "1 2 8"},
		{Input: 10, Expected: "2 8"},
		{Input: 64, Expected: "64"},
		{Input: 65, Expected: "1 64"},
	}

	for _, th := range data {
		res := Solution(th.Input)

		if res != th.Expected {
			t.Errorf("Expected result to be '%s' but got '%s'", th.Expected, res)
		}
	}

}
