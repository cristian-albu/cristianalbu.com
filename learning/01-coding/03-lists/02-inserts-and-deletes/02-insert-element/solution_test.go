package insertelement

import (
	"reflect"
	"testing"
)

func TestSuite(t *testing.T) {

	data := []struct {
		Input    []int
		X        int
		P        int
		Expected []int
	}{
		{Input: []int{7, 3, 9, 1, 6}, X: 10, P: 2, Expected: []int{7, 10, 3, 9, 1, 6}},
		{Input: []int{5}, X: 1, P: 1, Expected: []int{1, 5}},
		{Input: []int{1, 2, 3}, X: 99, P: 3, Expected: []int{1, 2, 99, 3}},
		{Input: []int{1, 2, 3}, X: 5, P: 1, Expected: []int{5, 1, 2, 3}},
	}

	for _, th := range data {
		result := Solution(th.Input, th.X, th.P)

		if !reflect.DeepEqual(result, th.Expected) {
			t.Errorf("Expected %v but got %v", th.Expected, result)
		}
	}

	for _, th := range data {
		result := Solution2(th.Input, th.X, th.P)

		if !reflect.DeepEqual(result, th.Expected) {
			t.Errorf("Expected %v but got %v", th.Expected, result)
		}
	}

}
