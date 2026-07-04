package deleteelement

import (
	"reflect"
	"testing"
)

func TestSuite(t *testing.T) {

	data := []struct {
		Input    []int
		P        int
		Expected []int
	}{
		{Input: []int{7, 3, 9, 1, 6}, P: 2, Expected: []int{7, 9, 1, 6}},
		{Input: []int{5}, P: 1, Expected: []int{}},
		{Input: []int{1, 2, 3}, P: 1, Expected: []int{2, 3}},
		{Input: []int{1, 2, 3}, P: 3, Expected: []int{1, 2}},
	}

	for _, th := range data {
		result := Solution(th.Input, th.P)

		if !reflect.DeepEqual(result, th.Expected) {
			t.Errorf("Expected %v but got %v", th.Expected, result)
		}
	}

	for _, th := range data {
		result := Solution2(th.Input, th.P)

		if !reflect.DeepEqual(result, th.Expected) {
			t.Errorf("Expected %v but got %v", th.Expected, result)
		}
	}

}
