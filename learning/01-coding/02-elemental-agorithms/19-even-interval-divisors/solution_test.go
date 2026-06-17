package evenintervaldivisors

import "testing"

func TestSuite(t *testing.T) {

	data := []struct {
		Input1   int
		Input2   int
		Expected string
	}{
		{Input1: 10, Input2: 20, Expected: "4 12 20"},
		{Input1: 1, Input2: 2, Expected: "1 2 2"},
		{Input1: 7, Input2: 8, Expected: "3 8 8"},
		{Input1: 1, Input2: 1000, Expected: "24 720 960"},
		{Input1: 536870900, Input2: 536870962, Expected: "64 536870910 536870928"},
		{Input1: 100000000, Input2: 100000999, Expected: "360 100000800 100000800"},
		{Input1: 999998999, Input2: 999999999, Expected: "768 999999000 999999000"},
	}

	for _, th := range data {
		res := Solution(th.Input1, th.Input2)

		if res != th.Expected {
			t.Errorf("Expected result to be %s but got %s", th.Expected, res)
		}
	}

}
