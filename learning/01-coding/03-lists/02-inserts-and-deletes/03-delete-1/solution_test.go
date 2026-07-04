package delete1

import (
	"reflect"
	"testing"
)

func TestSuite(t *testing.T) {

	data := []struct {
		Input    []int
		Expected []int
	}{
		{Input: []int{7, 9, 4, 2, 1, 6, 5}, Expected: []int{7, 9, 1, 5}},
		{Input: []int{2, 4, 6, 8}, Expected: []int{}},
		{Input: []int{1, 3, 5, 7}, Expected: []int{1, 3, 5, 7}},
		{Input: []int{2}, Expected: []int{}},
	}

	for _, th := range data {
		result := Solution(th.Input)

		if !reflect.DeepEqual(result, th.Expected) {
			t.Errorf("Expected %v but got %v", th.Expected, result)
		}
	}

}
