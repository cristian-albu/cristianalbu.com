package display0

import (
	"reflect"
	"testing"
)

func TestSuite(t *testing.T) {

	data := []struct {
		Input    []int
		Expected []int
	}{
		{Input: []int{7, 4, 9, 6, 2}, Expected: []int{4, 6, 2}},
		{Input: []int{5}, Expected: []int{5}},
		{Input: []int{3, 3, 3}, Expected: []int{3, 3, 3}},
		{Input: []int{7, 5, 3}, Expected: []int{3}},
	}

	for _, th := range data {
		result := Solution(th.Input)

		if !reflect.DeepEqual(result, th.Expected) {
			t.Errorf("Expected %v but got %v", th.Expected, result)
		}
	}

}
