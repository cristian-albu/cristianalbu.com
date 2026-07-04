package deletion

import (
	"reflect"
	"testing"
)

func TestSuite(t *testing.T) {

	data := []struct {
		Input    []int
		Expected []int
	}{
		{Input: []int{7, 8, 9, 17, 1}, Expected: []int{8, 9, 1}},
		{Input: []int{2, 3, 5, 7}, Expected: []int{}},
		{Input: []int{4, 6, 8, 9}, Expected: []int{4, 6, 8, 9}},
		{Input: []int{2}, Expected: []int{}},
	}

	for _, th := range data {
		result := Solution(th.Input)

		if !reflect.DeepEqual(result, th.Expected) {
			t.Errorf("Expected %v but got %v", th.Expected, result)
		}
	}

}
