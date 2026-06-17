package divisorsummirror

import "testing"

func TestSuite(t *testing.T) {

	data := []struct {
		Input    int
		Expected int
	}{
		{Input: 0, Expected: 0},
	}

	for _, th := range data {
		res := Solution(th.Input)

		if res != th.Expected {
			t.Errorf("Expected result to be %d but got %d", th.Expected, res)
		}
	}

}
