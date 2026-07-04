package replacement5

import (
	"reflect"
	"testing"
)

func TestSuite(t *testing.T) {

	data := []struct {
		Input    []int
		Expected []int
	}{
		{Input: []int{7, 4, 9, 6, 2}, Expected: []int{0, 4, 9, 6, 0}},
		{Input: []int{4, 6, 8, 9}, Expected: []int{4, 6, 8, 9}},
		{Input: []int{2, 3, 5, 7}, Expected: []int{0, 0, 0, 0}},
		{Input: []int{1}, Expected: []int{1}},
	}

	for _, th := range data {
		result := Solution(th.Input)

		if !reflect.DeepEqual(result, th.Expected) {
			t.Errorf("Expected %v but got %v", th.Expected, result)
		}
	}

}
