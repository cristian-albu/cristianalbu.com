package insert3

import (
	"reflect"
	"testing"
)

func TestSuite(t *testing.T) {

	data := []struct {
		Input    []int
		Expected []int
	}{
		{Input: []int{7, 9, 4, 2, 1, 6, 1}, Expected: []int{7, 9, 4, 2, 1, 1, 6, 1, 1}},
		{Input: []int{5}, Expected: []int{5, 5}},
		{Input: []int{3, 3, 3}, Expected: []int{3, 3, 3, 3, 3, 3}},
		{Input: []int{5, 2, 8, 2}, Expected: []int{5, 2, 2, 8, 2, 2}},
	}

	for _, th := range data {
		result := Solution(th.Input)

		if !reflect.DeepEqual(result, th.Expected) {
			t.Errorf("Expected %v but got %v", th.Expected, result)
		}
	}

}
