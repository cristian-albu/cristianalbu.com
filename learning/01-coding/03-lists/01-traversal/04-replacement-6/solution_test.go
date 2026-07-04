package replacement6

import (
	"reflect"
	"testing"
)

func TestSuite(t *testing.T) {

	data := []struct {
		Input    []int
		Expected []int
	}{
		{Input: []int{7, 4, 9, 6, 2}, Expected: []int{7, 4, 9, 6, 0}},
		{Input: []int{2, 3, 4}, Expected: []int{2, 0, 4}},
		{Input: []int{4, 6, 8}, Expected: []int{4, 6, 8}},
		{Input: []int{2}, Expected: []int{0}},
	}

	for _, th := range data {
		result := Solution(th.Input)

		if !reflect.DeepEqual(result, th.Expected) {
			t.Errorf("Expected %v but got %v", th.Expected, result)
		}
	}

}
