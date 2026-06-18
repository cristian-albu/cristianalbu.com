package divisorsummirror

import "testing"

func TestSuite(t *testing.T) {

	data := []struct {
		Input    string
		Expected int
	}{
		{Input: "12 23 30", Expected: 99},
		{Input: "1", Expected: 1},                            // smallest possible input
		{Input: "100", Expected: 1},                          // trailing zeros: mirror(100) = 1
		{Input: "10 25", Expected: 99},                       // mirror(10)=1, mirror(25)=52
		{Input: "1 2 3 4", Expected: 15},                     // several tiny numbers
		{Input: "121", Expected: 133},                        // palindrome: mirror(121) = 121
		{Input: "999999999", Expected: 1534205464},           // max-length value, no trailing zeros
		{Input: "123456789", Expected: 1515470502},           // mirror flips order completely
		{Input: "7 70 700", Expected: 24},                    // increasing trailing zeros
		{Input: "999999999 1 1000000", Expected: 1534205466}, // mix of max value and many zeros
		{Input: "13 31 17 71", Expected: 136},                // mirrored pairs of each other
		{Input: "500000000", Expected: 6},                    // mirror(500000000) = 5
	}

	for _, th := range data {
		res := Solution(th.Input)

		if res != th.Expected {
			t.Errorf("Expected result to be %d but got %d", th.Expected, res)
		}
	}

}
